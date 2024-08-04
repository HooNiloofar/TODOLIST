"use client";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l-md"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-md"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{task}</span>
            <button
              className="bg-red-500 text-white p-1 rounded"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
