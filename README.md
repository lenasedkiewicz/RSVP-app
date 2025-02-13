# RSVP App

# Running app

To run app use in CMD:

docker-compose up --build

Important. You need to have configured Docker Desktop.

## Project structure

```
my-app/
├── backend/ # Nest.js backend
│ ├── src/ # Source code
│ │ ├── app.module.ts # Main module
│ │ ├── example/ # Example resolver
│ │ │ └── example.resolver.ts
│ │ └── main.ts # Entry point
│ ├── Dockerfile # Docker configuration for backend
│ └── package.json # Backend dependencies
│
├── frontend/ # React frontend (Vite)
│ ├── src/ # Source code
│ │ ├── main.tsx # Entry point
│ │ ├── App.tsx # Main React component
│ │ └── ... # Other components
│ ├── Dockerfile # Docker configuration for frontend
│ └── package.json # Frontend dependencies
│
├── docker-compose.yml # Docker Compose configuration
└── README.md # Project documentation
```

## Technologies used

Backend
Nest.js
A progressive Node.js framework for building efficient and scalable server-side applications.
Used to create the GraphQL API.

GraphQL
A query language for APIs.
Used as the main communication protocol between the frontend and backend.

MongoDB
A NoSQL database for storing application data.
Integrated with Nest.js using Mongoose.

TypeScript
A typed superset of JavaScript.
Used for writing type-safe backend code.

Apollo Server
A GraphQL server implementation.
Used to handle GraphQL queries and mutations in Nest.js.

Frontend
React
A JavaScript library for building user interfaces.
Used to create the frontend application.

Vite
A modern build tool for fast development.
Used instead of Create React App for better performance and developer experience.

Apollo Client
A GraphQL client for managing data in React applications.
Used to send queries and mutations to the backend.

TypeScript
Used for writing type-safe frontend code.

DevOps
Docker
A containerization platform.
Used to package the application and its dependencies into containers.

Docker Compose
A tool for defining and running multi-container Docker applications.
Used to orchestrate the backend, frontend, and MongoDB services.

## How It Works

Backend:
The Nest.js backend exposes a GraphQL API at http://localhost:3000/graphql.
It handles queries (e.g., hello) and mutations using resolvers.

Frontend:
The React frontend runs at http://localhost:3001.
It uses Apollo Client to send GraphQL queries to the backend and display the results.

Database:
MongoDB is used as the database, running in a Docker container.

Docker Compose:
Manages the backend, frontend, and MongoDB containers.
Ensures all services can communicate with each other.

## Key Features

Full-Stack TypeScript:
Both the frontend and backend are written in TypeScript for type safety and better developer experience.

GraphQL API:
Provides a flexible and efficient way for the frontend to interact with the backend.

Containerization:
Docker and Docker Compose make it easy to set up and run the application in any environment.

Modern Frontend:
Vite provides a fast and optimized development experience for the React frontend.

## How to Explain It to Others

Project Structure:
The project is divided into backend (Nest.js) and frontend (React) folders, with a docker-compose.yml file to manage the services.

Technologies:
The backend uses Nest.js, GraphQL, and MongoDB.
The frontend uses React, Vite, and Apollo Client.
Docker and Docker Compose are used for containerization and orchestration.

How It Works:
The frontend sends GraphQL queries to the backend, which processes them and returns the results.
MongoDB is used to store data, and Docker Compose ensures all services work together seamlessly.
