FROM node

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# This docker file will copy code from app directory
# including the node_modules and .next folder.
COPY . .

EXPOSE 3000

RUN rm -rf node_modules/
RUN npm install
RUN npm run build

# This run the server at default port 3000
CMD ["npm", "run", "start"]