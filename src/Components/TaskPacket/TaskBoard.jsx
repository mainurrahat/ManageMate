import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
const TaskBoard = () => {
  const defaultTasks = [
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      description: "Study the React documentation and build a sample project.",
      tag: ["web", "frontend"],
      priority: "High",
      isFavourite: true,
    },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseModal = () => {
    setShowAddModal(false);
  };
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <div>
      {showAddModal && (
        <AddTaskModal
          isOpen={showAddModal}
          onClose={handleCloseModal}
          onAdd={handleAddTask}
        />
      )}
      <div className="p-2 flex justify-end">
        <SearchTask />
      </div>

      <div className="rounded-2xl border px-6 py-8 md:px-9 md:py-16">
        <TaskAction onAddClick={() => setShowAddModal(true)} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
