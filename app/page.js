"use client";
import React, { useState } from "react";

const page = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { taskTitle, taskDescription }]);

    setTaskTitle("");
    setTaskDescription("");
  };
  let renderTask;

  if (mainTask.length === 0) {
    renderTask = (
      <tr>
        <td colSpan={2} className="text-center h-12">No Task Available</td>
      </tr>
    );
  } else {
    renderTask = mainTask.map((task, idx) => {
      return (
        <tr
          key={idx}
          className="border-t border-gray-700 hover:bg-gray-700 transition duration-300"
        >
          <td className="px-6 py-4 text-left">{task.taskTitle}</td>
          <td className="px-6 py-4 text-left">{task.taskDescription}</td>
        </tr>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-8 text-4xl text-center font-bold shadow-lg">
        My Todo List
      </h1>
      <div className="container mx-auto px-4 py-8">
        <form
          onSubmit={handelSubmit}
          className="bg-gray-800 shadow-2xl rounded-lg p-8 mb-8 border border-gray-700"
        >
          <div className="flex flex-col space-y-4">
            {/* Task Title */}
            <div>
              <label
                htmlFor="taskTitle"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Task Title
              </label>
              <input
                required
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full text-lg placeholder:text-gray-400 bg-gray-700 border-gray-600 border-2 p-3 rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300"
                placeholder="Enter Task Title"
                type="text"
                autoComplete="off"
              />
            </div>
            {/* Task Description */}
            <div>
              <label
                htmlFor="taskDescription"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Task Description
              </label>
              <input
                required
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full  text-lg placeholder:text-gray-400 bg-gray-700 border-gray-600 border-2 p-3 rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300"
                placeholder="Enter Task Description"
                autoComplete="off"
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-6 py-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition duration-300 transform hover:scale-105"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
        <hr className="mb-8 border-t border-gray-700" />
        <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-blue-600">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-lg">
                  Title
                </th>
                <th className="px-6 py-3 text-left font-semibold text-lg">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>{renderTask}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
