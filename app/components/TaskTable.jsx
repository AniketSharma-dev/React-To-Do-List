import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, completeTask, deleteTask }) => {
    return (
        <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-blue-600">
                    <tr>
                        <th className="px-6 py-3 text-left font-semibold text-lg">Title</th>
                        <th className="px-6 py-3 text-left font-semibold text-lg">Description</th>
                        <th className="px-6 py-3 text-left font-semibold text-lg">Complete Task</th>
                        <th className="px-6 py-3 text-left font-semibold text-lg">Delete Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="text-center h-12">No Task Available</td>
                        </tr>
                    ) : (
                        tasks.map((task, idx) => (
                            <TaskRow
                                key={idx}
                                task={task}
                                idx={idx}
                                completeTask={completeTask}
                                deleteTask={deleteTask}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
