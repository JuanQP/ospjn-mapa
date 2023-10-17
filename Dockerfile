FROM node:18-alpine

WORKDIR /app/frontend
COPY frontend/package*.json /app/frontend/
RUN npm ci --include=dev
COPY frontend/ .
RUN npm run build

WORKDIR /app/api
COPY api/package*.json .
RUN npm ci
COPY api/ .
