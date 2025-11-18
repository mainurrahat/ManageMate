/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="mt-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-x-auto shadow-lg rounded-xl"
      >
        <table className="min-w-full bg-white rounded-xl">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Star</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Tag</th>
              <th className="py-3 px-4 text-left">Priority</th>
              <th className="py-3 px-4 text-left">Option</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="py-6 text-center text-gray-500 font-medium"
                >
                  No tasks found.
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">
                    <button className="hover:scale-110 transition">
                      {task.isFavourite ? (
                        <Star
                          className="text-yellow-400 fill-yellow-400"
                          size={20}
                        />
                      ) : (
                        <Star className="text-gray-400" size={20} />
                      )}
                    </button>
                  </td>

                  <td className="py-3 px-4 font-semibold text-black">
                    {task.title}
                  </td>

                  <td className="py-3 px-4 text-gray-700">
                    {task.description}
                  </td>

                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-medium">
                      {task.tags?.join(", ") || ""}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        task.priority === "High"
                          ? "bg-red-500 text-white"
                          : task.priority === "Medium"
                          ? "bg-yellow-400 text-black"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="flex gap-3">
                    <button
                      onClick={() => onEdit(task)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(task)}
                      className="text-blue-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default TaskList;
