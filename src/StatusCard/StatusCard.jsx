import { toast } from "react-toastify";

const StatusCard = ({
  removeFromTickets,
  ticket,
  resolvedTask,
  setResolvedTask,
}) => {
  const handleRemove = () => {
    removeFromTickets(ticket);
    setResolvedTask([...resolvedTask, ticket]);
    toast("Task marked as Resolved");
  };
  return (
    <div className="bg-white p-4 rounded-[4px] shadow-md mb-4 ">
      <h1 className="text-[15px] font-medium ">{ticket.title}</h1>
      <div className="flex">
        <button
          onClick={handleRemove}
          className="bg-[#02a53b] cursor-pointer flex-1 p-1.5 text-white rounded-[4px] mt-2"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default StatusCard;
