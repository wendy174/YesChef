# Base node image 
FROM node:14

# Set working directory 
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies 
RUN npm install

# Copy the rest of the application code to the working directory
COPY . ./

# Set environment variables
ENV NODE_ENV development

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"] 