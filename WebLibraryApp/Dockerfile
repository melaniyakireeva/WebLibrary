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

# Этап 3: Сборка Angular (с исправлением ошибки rollup)
FROM node:18.20.2-alpine AS frontend-builder
WORKDIR /src

# Установка системных зависимостей
RUN apk add --no-cache python3 make g++

# Копируем только файлы, необходимые для установки зависимостей
COPY Frontend/package.json Frontend/package-lock.json ./

# Чистка кеша и установка зависимостей
RUN npm cache clean --force && \
    rm -rf node_modules && \
    npm install -g @angular/cli@18.2.10 && \
    npm install --force --legacy-peer-deps

# Проверяем наличие проблемных модулей
RUN npm list @rollup/rollup || true

# Копируем остальные файлы проекта
COPY Frontend/ .

# Сборка проекта с дополнительными флагами для диагностики
RUN ng config -g cli.warnings.versionMismatch false && \
    ng build --configuration production --base-href="https://wisdom-frontend-1947-5cd9.twcl.net/" --verbose

# Этап 4: Публикация .NET приложения
FROM build AS publish
WORKDIR "/src/LibraryApi"
RUN dotnet publish "LibraryApp.csproj" -c Release -o /app/publish

# Финальный образ
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=frontend-builder /src/dist/Frontend ./wwwroot
ENTRYPOINT ["dotnet", "LibraryApp.dll"]