# syntax=docker/dockerfile:1.4
FROM node:20-alpine

# Instalar o Angular CLI globalmente
RUN npm install -g @angular/cli

# Definir o diretório de trabalho
WORKDIR /project

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm ci

# Copiar todos os arquivos do projeto
COPY . .

# Comando padrão para iniciar a aplicação Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
