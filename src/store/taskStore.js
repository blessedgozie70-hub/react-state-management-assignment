
import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, title: 'Learn React Router' },
    { id: 2, title: 'Practise Context API' }
  ],

  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          title
        }
      ]
    }))
}));
