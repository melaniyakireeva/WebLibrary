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

# Этап 3: Сборка фронтенда (Angular) - ОБНОВЛЕННЫЙ ОБРАЗ NODE
FROM node:18.18.2-alpine AS frontend-builder
WORKDIR /src

# Установка Python и build-essential для node-gyp
RUN apk add --no-cache python3 make g++

# Копируем package файлы
COPY ["Frontend/package.json", "Frontend/package-lock.json*", "./"]

# Чистка кеша npm и установка зависимостей
RUN npm cache clean --force && \
    npm install --force

# Копируем весь фронтенд код
COPY ["Frontend/", "./"]

# Собираем фронтенд
RUN npm run build --prod

# Этап 4: Публикация финального образа
FROM build AS publish
WORKDIR "/src/LibraryApi"
RUN dotnet publish "LibraryApp.csproj" -c Release -o /app/publish

# Финальный образ
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=frontend-builder /src/dist/Frontend ./wwwroot
ENTRYPOINT ["dotnet", "LibraryApp.dll"]