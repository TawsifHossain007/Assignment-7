import React from "react";
import ResolvedCard from "../ResolvedCard/ResolvedCard";
import TaskStatus from "../TaskStatus/TaskStatus";

const ResolvedTask = ({ setResolvedTask, resolvedTask }) => {
  return (
    <div className="mt-8">
      <h1 className="text-[24px] font-semibold text-[#34485a]">
        Resolved Task
      </h1>

      <div className="grid grid-cols-1 max-h-[500px] overflow-y-auto">
        {resolvedTask.length === 0 ? (
          <p className="text-[#627382]">No resolved tasks yet.</p>
        ) : (
          resolvedTask.map((resTask) => (
            <ResolvedCard
              resTask={resTask}
              setResolvedTask={setResolvedTask}
              resolvedTask={resolvedTask}
            ></ResolvedCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ResolvedTask;
