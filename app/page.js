"use client";
import React, { useState } from "react";

const page = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(taskTitle, taskDescription);



    setTaskTitle("")
    setTaskDescription("")
    
    
  };

  return (
    <>
      <h1 className="w-full bg-black text-gray-200 px-5 py-8 text-3xl text-center font-bold">
        My Todo List
      </h1>
      <form onSubmit={handelSubmit} className="flex justify-start items-center">
        {/* Task Title */}
        <div>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            className="text-1xl placeholder:text-gray-900 border-zinc-800 border-2 m-5 p-2 "
            placeholder="Enter Task Title"
            type="text"
          />
        </div>
        {/* Task Description */}
        <div>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="text-1xl placeholder:text-gray-900 border-zinc-800 border-2 m-5 p-2 "
            cols="30"
            rows="3"
            placeholder="Enter Task Description"
          />
        </div>
        <div>
          <button className="bg-black text-white font-bold m-5 px-4 py-3 rounded">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
