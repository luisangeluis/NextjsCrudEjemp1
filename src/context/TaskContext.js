import { createContext } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const tasks = [];
  return (
    <TaskContext.Provider value={tasks}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider;