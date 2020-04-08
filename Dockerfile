FROM node:alpine

ENV NODE_ENV=production

# Install app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .

# Expose port and enable traefik proxy
EXPOSE 3000
LABEL traefik.enable="true"

# Run app
CMD ["node", "src/app.js"]