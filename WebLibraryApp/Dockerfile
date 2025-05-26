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

# Этап 3: Сборка Angular (используем node:18-bullseye вместо alpine)
FROM node:18-bullseye AS frontend-builder
WORKDIR /src

# Установка Angular CLI глобально
RUN npm install -g @angular/cli@18.2.10

# Копируем только файлы, необходимые для установки зависимостей
COPY Frontend/package.json Frontend/package-lock.json ./

# Очистка и установка зависимостей
RUN npm ci --no-optional --force

# Копируем остальные файлы проекта
COPY Frontend/ .

# Сборка проекта
RUN ng build --configuration production --base-href="https://wisdom-frontend-1947-5cd9.twcl.net/"

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