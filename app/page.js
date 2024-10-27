"use client";
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";

const page = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { taskTitle, taskDescription, completed: false }]);
    setTaskTitle("");
    setTaskDescription("");
  };

  const completeTask = (idx) => {
    let updatedTask = [...tasks];
    updatedTask[idx].completed = true;
    setTasks(updatedTask);
  };

  const deleteTask = (idx) => {
    let copyTask = [...tasks];
    copyTask.splice(idx, 1);
    setTasks(copyTask);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-8 text-4xl text-center font-bold shadow-lg"> My Todo List </h1>
      <div className="container mx-auto px-4 py-8">
        <TaskForm
          taskTitle={taskTitle}
          taskDescription={taskDescription}
          setTaskTitle={setTaskTitle}
          setTaskDescription={setTaskDescription}
          onSubmit={handleSubmit}
        />
        <hr className="mb-8 border-t border-gray-700" />
        <TaskTable
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default page;
