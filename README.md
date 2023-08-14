# Convox Node.js Service Discovery Example

This repository contains a basic example of a Node.js application with two services, frontend and backend, demonstrating Convox's service discovery features. The frontend is accessible via the web, while the backend remains internal. The frontend service discovers the backend service using Convox's built-in service linking.

> **Note for V2 Racks:** To utilize internal-only services, the Rack Parameter `Internal=Yes` must be set.

## Structure:

- **frontend**: A Node.js service using Express.js accessible over the web. It connects to the backend service to fetch a greeting.
- **backend**: An internal-only Node.js service using Express.js, which provides a simple greeting message.
