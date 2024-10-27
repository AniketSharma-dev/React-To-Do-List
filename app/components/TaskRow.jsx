import React from "react";

const TaskRow = ({ task, idx, completeTask, deleteTask }) => {
    return (
        <tr className={`border-t border-gray-700 hover:bg-gray-700 transition duration-300 ${task.completed ? "bg-green-500 hover:bg-green-600" : ""}`}>
            <td className="px-6 py-4 text-left">{task.taskTitle}</td>
            <td className="px-6 py-4 text-left">{task.taskDescription}</td>
            <td className="px-6 py-auto">
                {!task.completed ? (
                    <button onClick={() => completeTask(idx)} className="bg-green-500 px-3 py-2 rounded" > Complete </button>
                ) : (<span className="text-white">Completed</span>)}
            </td>
            <td className="px-6 py-auto">
                {!task.completed && ( <button onClick={() => deleteTask(idx)} className="bg-red-500 px-3 py-2 rounded" > Delete </button>)}
            </td>
        </tr>
    );
};

export default TaskRow;
