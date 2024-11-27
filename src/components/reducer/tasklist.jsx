import React, { useContext, useState, useRef } from 'react';
import TaskContext from './taskapp';

export default function TaskList() {
  const { state, dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef(null);

  const addTask = () => {
    if (newTask.trim()) {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
      inputRef.current.focus();
    }
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const removeAllTask = () => {
    dispatch({ type: 'REMOVE_ALL_TASK' });
  };

  return (
    <>
      <h4>Add Task</h4>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          ref={inputRef}
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div>
        {state.map((task) => (
          <div key={task.id}>
            <span>{task.task}</span>{' '}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={removeAllTask}>Remove All</button>
      </div>
    </>
  );
}
