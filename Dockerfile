# ============================================
# Rota Belli — Multi-stage Docker Build
# ============================================

# ---- Stage 1: Build ----
FROM node:22-alpine AS builder

WORKDIR /app

# Bağımlılıkları kur (cache için önce package dosyalarını kopyala)
COPY package*.json ./
RUN npm ci

# Kaynak kodları kopyala ve build et
COPY . .
RUN npm run build

# ---- Stage 2: Serve (Nginx) ----
FROM nginx:alpine AS production

# Özel nginx konfigürasyonu kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Build çıktısını nginx'in statik dosya dizinine kopyala
COPY --from=builder /app/dist /usr/share/nginx/html

# 80 portunu aç
EXPOSE 80

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]
