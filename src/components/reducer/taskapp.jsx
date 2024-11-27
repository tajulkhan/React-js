import { useReducer, createContext } from 'react';
// import TaskList from './tasklist';
import taskReducer from './taskreducer';

const TaskContext = createContext();
const oldTask = [
  { id: 1, task: 'Working' },
  { id: 2, task: 'Playing' },
];

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, oldTask);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <div>
        <h4>Task Management App</h4>
        {children}
      </div>
    </TaskContext.Provider>
  );
};

export default TaskContext;
