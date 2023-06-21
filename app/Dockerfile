FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json del directorio actual al directorio de trabajo del contenedor
COPY package*.json ./

# Instala las dependencias del proyecto utilizando npm
RUN npm install

# Copia todos los archivos del directorio actual al directorio de trabajo del contenedor
COPY . .

# Expone el puerto 3000 del contenedor para que pueda ser accedido
EXPOSE 3000

# Define el comando que se ejecutará cuando el contenedor se inicie
CMD ["npm", "start"]
