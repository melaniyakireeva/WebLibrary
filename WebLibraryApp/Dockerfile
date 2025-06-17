FROM node:18.20.2-bullseye AS frontend-builder
WORKDIR /src

# 1. Установка Angular CLI
RUN npm install -g @angular/cli@18.2.10

# 2. Копируем только package файлы
COPY Frontend/package.json Frontend/package-lock.json ./

# 3. Установка зависимостей с флагами для разрешения конфликтов
RUN rm -rf node_modules && \
    npm install --legacy-peer-deps && \
    npm install --no-save rollup@3.29.4 @rollup/rollup-linux-x64-gnu --legacy-peer-deps

# 4. Копируем исходный код
COPY Frontend/ .

# 5. Сборка проекта
RUN ng build --configuration production \
    --base-href="https://wisdom-frontend-1947-5cd9.twcl.net/" \
    --verbose