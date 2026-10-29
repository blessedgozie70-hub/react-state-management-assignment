# React State Management Assignment

## Overview
A React project demonstrating routing and different state-management approaches.

## Technologies
- React
- React Router
- Context API
- Zustand
- TanStack Query
- Vite

## Features

### React Router
Includes Home, Tasks, and dynamic task-detail routes.

### Context API
Demonstrates prop drilling and sharing user information using React Context.

### Zustand
Shares a task list between components and allows users to add tasks.

### TanStack Query
Fetches tasks using `useQuery` and demonstrates optimistic updates using `useMutation`.

Note: Tasks are fetched from JSONPlaceholder. Newly added tasks are optimistic local-cache updates and are not permanently saved to the server.

## Setup
1. Run `npm install`.
2. Run `npm run dev`.
3. Open the local URL shown in your terminal.

## Architecture Decisions
- React Router handles navigation.
- Context API shares values across nested components.
- Zustand manages shared client-side state.
- TanStack Query manages fetched server data and cache updates.
