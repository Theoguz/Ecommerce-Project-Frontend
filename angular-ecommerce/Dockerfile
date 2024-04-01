FROM node:alpine  

WORKDIR /usr/src/app

# Uygulama dosyalarını kopyala
COPY . /usr/src/app

# Angular CLI'ı yükle
RUN npm install -g @angular/cli

# Gerekli bağımlılıkları yükle
RUN npm install


# Uygulamayı HTTPS üzerinden çalıştırmak için SSL sertifikalarını kullanarak uygulamayı başlat
CMD ["ng", "serve", "--host", "0.0.0.0", "--ssl"]
