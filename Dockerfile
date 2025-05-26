FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
# Setup NodeJs
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y build-essential nodejs
RUN npm install @angular/cli -g
# End setup

WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["AngularWebApp/AngularWebApp.csproj", "AngularWebApp/"]
RUN dotnet restore "AngularWebApp/AngularWebApp.csproj"
COPY . .
WORKDIR "/src/AngularWebApp"
RUN dotnet build "AngularWebApp.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "AngularWebApp.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
WORKDIR /app/ClientApp
RUN npm install
RUN npm rebuild node-sass
WORKDIR /app
ENTRYPOINT ["dotnet", "AngularWebApp.dll"]