
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

async function fetchTasks() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }

  return response.json();
}

export default function QueryDemo() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks
  });

  const addMutation = useMutation({
    mutationFn: async (newTitle) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return {
        id: Date.now(),
        title: newTitle,
        completed: false
      };
    },

    onMutate: async (newTitle) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData(['tasks']);

      queryClient.setQueryData(['tasks'], (old = []) => [
        {
          id: Date.now(),
          title: newTitle,
          completed: false
        },
        ...old
      ]);

      return { previousTasks };
    },

    onError: (_error, _newTitle, context) => {
      queryClient.setQueryData(['tasks'], context.previousTasks);
    }
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

    addMutation.mutate(title.trim());
    setTitle('');
  }

  if (isLoading) return <p>Loading tasks...</p>;
  if (isError) return <p>Could not load tasks. Check your internet connection.</p>;

  return (
    <main>
      <h1>TanStack Query Demo</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {addMutation.isPending && <p>Saving task...</p>}

      <ul>
        {data?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </main>
  );
}
