# Этап 1: Базовый образ для runtime (обновлен до .NET 8.0)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Этап 2: Сборка .NET приложения (обновлен до .NET 8.0 SDK)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# 1. Копируем solution файл (исправлено имя на .sln)
COPY ["backend/LibraryApp.sln", "./"]

# 2. Копируем ВСЕ .csproj файлы
COPY ["backend/LibraryApi/LibraryApp.csproj", "LibraryApi/"]
COPY ["backend/DataModels/DataModels.csproj", "DataModels/"]

# 3. Восстанавливаем зависимости
RUN dotnet restore "LibraryApp.sln"

# 4. Копируем весь backend код
COPY ["backend/", "./"]

# 5. Собираем основной проект
WORKDIR "/src/LibraryApi"
RUN dotnet build "LibraryApp.csproj" -c Release -o /app/build

# Этап 3: Сборка фронтенда (Angular)
FROM node:16 AS frontend-builder
WORKDIR /src

# 1. Копируем package файлы
COPY ["Frontend/package.json", "Frontend/package-lock.json", "./"]

# 2. Устанавливаем зависимости
RUN npm install

# 3. Копируем весь фронтенд код
COPY ["Frontend/", "./"]

# 4. Собираем фронтенд
RUN npm run build --prod

# Этап 4: Публикация финального образа
FROM build AS publish
WORKDIR "/src/LibraryApi"
RUN dotnet publish "LibraryApp.csproj" -c Release -o /app/publish

# Финальный образ
FROM base AS final
WORKDIR /app

# 1. Копируем собранный .NET бэкенд
COPY --from=publish /app/publish .

# 2. Копируем собранный Angular фронтенд
COPY --from=frontend-builder /src/dist/Frontend ./wwwroot

ENTRYPOINT ["dotnet", "LibraryApp.dll"]