import StatusCard from "../StatusCard/StatusCard";

const TaskStatus = ({
  removeFromTickets,
  ticketData,
  setTaskStatus,
  taskStatus,
  setResolvedTask,
  resolvedTask,
}) => {
  return (
    <div>
      <h1 className="text-[24px] font-semibold text-[#34485a] text-center md:text-left">Task Status</h1>

      <div className="grid grid-cols-1 mt-6 max-h-[600px] overflow-y-auto">
        {taskStatus.length === 0 ? (
          <p className="text-gray-500 text-center md:text-left">Select a ticket to add to Task Status</p>
        ) : (
          taskStatus.map((ticket) => (
            <StatusCard
              key={ticket.id}
              setResolvedTask={setResolvedTask}
              resolvedTask={resolvedTask}
              ticket={ticket}
              removeFromTickets={removeFromTickets}
              setTaskStatus={setTaskStatus}
              taskStatus={taskStatus}
              ticketData={ticketData}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
