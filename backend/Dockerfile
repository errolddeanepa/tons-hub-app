# ---- Base Stage ----
FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

# Copy the rest of the source code from the current directory
COPY . .

# Build the Medusa project for production
RUN npm run build

# Set the environment to production for the runtime
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 9000

# Command to run the Medusa server
CMD ["npm", "run", "start"]