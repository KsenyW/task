FROM node:8.4

# Setup work directory
RUN mkdir -p /client/dist
WORKDIR /client/dist/

# Install npm packages
COPY package.json /client/dist/
RUN npm install

# Copy application code & build it
COPY . /client/dist/
RUN npm run start:prod

# Entrypoint
EXPOSE 3000
ENTRYPOINT ["npm", "start"]