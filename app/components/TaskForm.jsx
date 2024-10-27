import React from "react";

const TaskForm = ({ taskTitle, taskDescription, setTaskTitle, setTaskDescription, onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-gray-800 shadow-2xl rounded-lg p-8 mb-8 border border-gray-700"
        >
            <div className="flex flex-col space-y-4">
                {/* Task Title */}
                <div>
                    <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-400 mb-1" > Task Title </label>
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
                    <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-400 mb-1" > Task Description </label>
                    <input
                        required
                        id="taskDescription"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full text-lg placeholder:text-gray-400 bg-gray-700 border-gray-600 border-2 p-3 rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300"
                        placeholder="Enter Task Description"
                        autoComplete="off"
                    />
                </div>
                {/* Submit Button */}
                <div className="flex justify-center">
                    <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-6 py-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition duration-300 transform hover:scale-105"> Add Task </button>
                </div>
            </div>
        </form>
    );
};

export default TaskForm;
