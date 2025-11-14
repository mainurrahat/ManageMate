/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [isFavourite, setIsFavourite] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in title and description");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      tag: tags.split(",").map((t) => t.trim()),
      priority,
      isFavourite,
    };

    onAdd(newTask);
    toast.success("Task added successfully!"); // Trigger toast
    onClose();

    // Reset form
    setTitle("");
    setDescription("");
    setTags("");
    setPriority("Medium");
    setIsFavourite(false);
  };

  if (!isOpen) return null;

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

          <h2 className="text-xl font-bold mb-4">Add New Task</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isFavourite}
                onChange={(e) => setIsFavourite(e.target.checked)}
                className="w-4 h-4"
              />
              Mark as Favourite
            </label>

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
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Add Task
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default AddTaskModal;
