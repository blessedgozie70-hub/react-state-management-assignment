
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home.jsx';
import Tasks from './pages/Tasks.jsx';
import TaskDetails from './pages/TaskDetails.jsx';
import PropDrilling from './context-demo/PropDrilling.jsx';
import ContextExample from './context-demo/ContextExample.jsx';
import ZustandDemo from './zustand-demo/ZustandDemo.jsx';
import QueryDemo from './query-demo/QueryDemo.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/tasks">Tasks</Link>
        {' | '}
        <Link to="/context">Context Demo</Link>
        {' | '}
        <Link to="/context-api">Context API</Link>
        {' | '}
        <Link to="/zustand">Zustand</Link>
        {' | '}
        <Link to="/query">TanStack Query</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/context" element={<PropDrilling />} />
        <Route path="/context-api" element={<ContextExample />} />
        <Route path="/zustand" element={<ZustandDemo />} />
        <Route path="/query" element={<QueryDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
