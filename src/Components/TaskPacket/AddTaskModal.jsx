/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTaskModal = ({ onSave, onClose, TaskToUpdate }) => {
  const [task, setTask] = useState(
    TaskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavourite: false,
    }
  );

  const [isAdd, setIsAdd] = useState(Object.is(TaskToUpdate, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",").map((t) => t.trim());
    }

    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 text-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <X size={24} />
          </button>

          <h2 className="text-xl font-bold mb-4">
            {isAdd ? "Add New Task" : "Edit Task"}
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Description"
              name="description"
              value={task.description}
              onChange={handleChange}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Tags (comma separated)"
              name="tags"
              value={task.tags.join(", ")}
              onChange={handleChange}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  onSave(task, isAdd);
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save Task
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default AddTaskModal;
