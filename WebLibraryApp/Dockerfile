# Этап 1: Базовый образ для .NET
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Этап 2: Сборка .NET приложения
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем solution и проекты
COPY ["backend/LibraryApp.sln", "./"]
COPY ["backend/LibraryApi/LibraryApp.csproj", "LibraryApi/"]
COPY ["backend/DataModels/DataModels.csproj", "DataModels/"]

# Восстанавливаем зависимости
RUN dotnet restore "LibraryApp.sln"

# Копируем весь код
COPY ["backend/", "./"]

# Собираем проект
WORKDIR "/src/LibraryApi"
RUN dotnet build "LibraryApp.csproj" -c Release -o /app/build

# Этап 3: Сборка Angular
FROM node:20.11.1-alpine AS frontend-builder
WORKDIR /src

# Устанавливаем системные зависимости
RUN apk add --no-cache python3 make g++

# Копируем package файлы
COPY ["Frontend/package.json", "Frontend/package-lock.json", "./"]

# Устанавливаем зависимости
RUN npm install -g @angular/cli@latest && \
    npm install --force && \
    npm cache clean --force

# Копируем исходный код
COPY ["Frontend/", "./"]

# Собираем проект
RUN npm run build -- --configuration=production --base-href="https://wisdom-frontend-1947-5cd9.twcl.net/"

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