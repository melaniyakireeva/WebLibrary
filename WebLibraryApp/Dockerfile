# Этап 1: Базовый образ для .NET
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

# Этап 3: Сборка Angular (полностью исправленный)
FROM node:20.11.1-alpine AS frontend-builder
WORKDIR /src

# 1. Устанавливаем системные зависимости (исправлено 'app' на 'apk')
RUN apk add --no-cache python3 make g++

# 2. Копируем только package файлы
COPY ["Frontend/package.json", "Frontend/package-lock.json", "./"]

# 3. Чистим кеш и устанавливаем зависимости
RUN rm -rf node_modules && \
    rm -f package-lock.json && \
    npm install -g @angular/cli@latest && \
    npm install --force --legacy-peer-deps && \
    npm cache clean --force

# 4. Копируем весь фронтенд код
COPY ["Frontend/", "./"]

# 5. Собираем проект (исправленная команда)
RUN ng build --configuration production --base-href="https://wisdom-frontend-1947-5cd9.twcl.net/"

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