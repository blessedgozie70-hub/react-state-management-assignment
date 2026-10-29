
import { useState } from 'react';
import { useTaskStore } from '../store/taskStore.js';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
