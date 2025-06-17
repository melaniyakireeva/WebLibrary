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

# Этап 3: Сборка Angular с явной установкой Rollup
FROM node:18.20.2-bullseye AS frontend-builder
WORKDIR /src

# 1. Установка Angular CLI
RUN npm install -g @angular/cli@18.2.10

# 2. Копируем package файлы
COPY Frontend/package.json Frontend/package-lock.json ./

# 3. Очистка и переустановка зависимостей (ваш код добавлен здесь)
RUN rm -rf node_modules package-lock.json && \
    npm install --no-save rollup@3.29.4 @rollup/rollup-linux-x64-gnu && \
    npm ci --no-optional --force

# 4. Проверяем установленные версии Rollup
RUN npm list rollup @rollup/rollup-linux-x64-gnu

# 5. Копируем исходный код
COPY Frontend/ .

# 6. Сборка с дополнительными флагами
RUN ng build --configuration production \
    --base-href="https://wisdom-frontend-1947-5cd9.twcl.net/" \
    --verbose

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