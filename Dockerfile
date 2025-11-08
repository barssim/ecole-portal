FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Build the frontend (for production)
RUN npm run build

# Expose port if needed (e.g., 3000 for dev server)
EXPOSE 3000

# Start app (or use 'npm start' depending on your app)
CMD ["npm", "run", "start:test"]
