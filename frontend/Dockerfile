FROM node

# sets working directory inside container to /backend 
# all commands in the file will run from this directory
WORKDIR /frontend 

COPY package.json . 

# install app dependencies
COPY package.json ./frontend/package.json
COPY package-lock.json ./frontend/package-lock.json
RUN npm install

# add app
COPY . ./
ENV NODE_ENV development
EXPOSE 3000

# start app
CMD ["npm", "start"] 