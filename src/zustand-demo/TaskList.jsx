
import { useTaskStore } from '../store/taskStore.js';

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}
