
import { Link } from 'react-router-dom';

const tasks = [
  { id: 1, title: 'Learn React Router' },
  { id: 2, title: 'Practise Context API' },
  { id: 3, title: 'Understand Zustand' }
];

export default function Tasks() {
  return (
    <section>
      <h1>My Tasks</h1>

      {tasks.map((task) => (
        <p key={task.id}>
          <Link to={`/tasks/${task.id}`}>
            {task.title} — View Details
          </Link>
        </p>
      ))}
    </section>
  );
}
