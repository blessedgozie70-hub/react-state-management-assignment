
import { useParams, Link } from 'react-router-dom';

const tasks = [
  { id: 1, title: 'Learn React Router', description: 'Create three routes.' },
  { id: 2, title: 'Practise Context API', description: 'Avoid unnecessary prop drilling.' },
  { id: 3, title: 'Understand Zustand', description: 'Share state between components.' }
];

export default function TaskDetails() {
  const { id } = useParams();

  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <section>
        <h1>Task Not Found</h1>
        <Link to="/tasks">Back to Tasks</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Task ID: {task.id}</p>
      <Link to="/tasks">Back to Tasks</Link>
    </section>
  );
}
