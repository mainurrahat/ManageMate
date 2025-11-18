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
      tags: ["web", "frontend"],
      priority: "High",
      isFavourite: true,
    },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleCloseModal = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  const handleDeleteAllClick = () => {
    setTasks([]);
  };

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTasks(updatedTasks);
    }
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  return (
    <div>
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          onClose={handleCloseModal}
          TaskToUpdate={taskToUpdate}
        />
      )}

      <div className="p-2 flex justify-end">
        <SearchTask />
      </div>

      <div className="rounded-2xl border px-6 py-8 md:px-9 md:py-16">
        <TaskAction
          onAddClick={() => setShowAddModal(true)}
          onAllDeleteTask={handleDeleteAllClick}
        />
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default TaskBoard;
