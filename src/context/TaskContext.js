import { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([{ id: "1", title: "task 1", description: "some task" }])

  return (
    <TaskContext.Provider value={{ tasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider;


