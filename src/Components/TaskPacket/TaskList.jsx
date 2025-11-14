/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Star, Pencil, Trash2 } from "lucide-react";

const TaskList = ({ tasks = [], onEdit, onDelete }) => {
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
              <th className="py-3 px-4 text-left">Actions</th>
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
              tasks.map((task, index) => (
                <tr
                  key={task.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Star */}
                  <td className="py-3 px-4">
                    <button className="text-yellow-500 hover:scale-110 transition">
                      <Star size={20} />
                    </button>
                  </td>

                  {/* Title */}
                  <td className="py-3 px-4 font-semibold">{task.title}</td>

                  {/* Description */}
                  <td className="py-3 px-4 text-gray-700">
                    {task.description}
                  </td>

                  {/* Tag */}
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">
                      {task.tag}
                    </span>
                  </td>

                  {/* Priority */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${
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

                  {/* Actions */}
                  <td className="py-3 px-4 flex gap-3">
                    <button
                      onClick={() => onEdit(task.id)}
                      className="text-blue-600 hover:scale-110 transition"
                    >
                      <Pencil size={20} />
                    </button>

                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-red-600 hover:scale-110 transition"
                    >
                      <Trash2 size={20} />
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
