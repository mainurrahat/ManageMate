/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ListTodo, PlusCircle, Trash } from "lucide-react";

const TaskAction = ({ onAddClick }) => {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-4 bg-white border shadow-md rounded-2xl p-6 max-w-xl w-full justify-center"
      >
        {/* Your Tasks */}
        <button
        //   onClick={onViewTasks}
          className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition font-medium"
        >
          <ListTodo size={20} />
          Your Tasks
        </button>

        {/* Add Task */}
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition font-medium"
        >
          <PlusCircle size={20} />
          Add Task
        </button>

        {/* Delete Task */}
        <button
        //   onClick={onDeleteTask}
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition font-medium"
        >
          <Trash size={20} />
          Delete All Tasks
        </button>
      </motion.div>
    </div>
  );
};

export default TaskAction;
