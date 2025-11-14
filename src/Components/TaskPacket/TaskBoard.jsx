import { Search } from "lucide-react";
import React from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <div>
      <div className="p-2  flex justify-end ">
        <div>
          <SearchTask />
        </div>
      </div>
      <div className="rounded-2xl border border=[rgba(206,206,206,0.12)] px=6 py-8 md:px-9 md:py-16">
        <TaskAction />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskBoard;
