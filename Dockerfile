# Use official Node.js LTS image (with additional packages as needed)
FROM node:lts

# Set working directory in the container
WORKDIR /usr/src/app

# Copy project dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files (from the root directory)
COPY . .

# Build the Next.js project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
