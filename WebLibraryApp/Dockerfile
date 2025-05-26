# Этап 1: Базовый образ для runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Этап 2: Сборка .NET приложения
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["backend/LibraryApp.sln", "./"]
COPY ["backend/LibraryApi/LibraryApp.csproj", "LibraryApi/"]
COPY ["backend/DataModels/DataModels.csproj", "DataModels/"]
RUN dotnet restore "LibraryApp.sln"
COPY ["backend/", "./"]
WORKDIR "/src/LibraryApi"
RUN dotnet build "LibraryApp.csproj" -c Release -o /app/build

# Этап 3: Сборка фронтенда - ОБНОВЛЕННЫЙ ОБРАЗ NODE
FROM node:18.19.1-alpine AS frontend-builder
WORKDIR /src

# Установка системных зависимостей
RUN apk add --no-cache python3 make g++

# Копируем package файлы
COPY ["Frontend/package.json", "Frontend/package-lock.json", "./"]

# Установка Angular CLI и зависимостей
RUN npm install -g @angular/cli@latest && \
    npm install --force && \
    npm cache clean --force

# Копируем исходный код
COPY ["Frontend/", "./"]

# Сборка проекта
RUN ng build --configuration production --base-href "https://wisdom-frontend-1947-5cd9.twcl.net/"

# Этап 4: Публикация
FROM build AS publish
WORKDIR "/src/LibraryApi"
RUN dotnet publish "LibraryApp.csproj" -c Release -o /app/publish

# Финальный образ
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=frontend-builder /src/dist/Frontend ./wwwroot
ENTRYPOINT ["dotnet", "LibraryApp.dll"]