# Этап 1: Базовый образ для runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

# Этап 2: Сборка .NET приложения
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Копируем solution файл и .csproj файлы
COPY ["backend/LibraryApp.sln", "."]
COPY ["backend/LibraryApi/LibraryApp.csproj", "LibraryApi/"]
RUN dotnet restore "LibraryApp.sln"

# Копируем весь backend код
COPY ["backend/", "."]

# Собираем проект
WORKDIR "/src/LibraryApi"
RUN dotnet build "LibraryApp.csproj" -c Release -o /app/build

# Этап 3: Установка Node.js и сборка Angular
FROM node:16 AS frontend-builder
WORKDIR /src

# Копируем и устанавливаем зависимости Angular
COPY ["frontend/package.json", "frontend/package-lock.json*", "./"]
RUN npm install

# Копируем и собираем фронтенд
COPY ["frontend/", "."]
RUN npm run build --prod

# Этап 4: Публикация финального образа
FROM build AS publish
WORKDIR "/src/LibraryApi"
RUN dotnet publish "LibraryApp.csproj" -c Release -o /app/publish

# Финальный образ
FROM base AS final
WORKDIR /app

# Копируем собранный .NET бэкенд
COPY --from=publish /app/publish .

# Копируем собранный Angular фронтенд
COPY --from=frontend-builder /src/dist/frontend ./wwwroot

ENTRYPOINT ["dotnet", "LibraryApp.dll"]