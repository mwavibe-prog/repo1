FROM node:18-alpine
WORKDIR /app
COPY index.html server.js ./
EXPOSE 3000
CMD ["node", "server.js"]
