import React from "react";

const Ticket = ({ ticket, taskStatus, setTaskStatus }) => {
  const isSelected = taskStatus.find((t) => t.id === ticket.id);
  const handleAddtoTaskStatus = (ticket) => {
    if (!isSelected) {
      setTaskStatus([...taskStatus, ticket]);
    }
  };
  return (
    <div
      onClick={() => handleAddtoTaskStatus(ticket)}
      className="bg-white p-4 rounded-[4px] shadow-md cursor-pointer hover:bg-gray-100"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] font-medium">{ticket.title}</h1>

        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full whitespace-nowrap
          ${
            ticket.status === "In-Progress"
              ? "bg-yellow-200 text-yellow-800"
              : ""
          }
          ${ticket.status === "Open" ? "bg-[#b9f8cf] text-[#0b5e06]" : ""}`}
        >
          <i
            className={`fa-solid fa-circle text-[10px] 
            ${ticket.status === "In-Progress" ? "text-yellow-500" : ""}
            ${ticket.status === "Open" ? "text-green-500" : ""}`}
          ></i>
          <span>{ticket.status}</span>
        </div>
      </div>
      <p className="text-[#627382] mt-4">{ticket.description}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-[#627382]">#{ticket.id}</p>
        <p
          className={`text-[14px] font-medium
          ${ticket.priority === "High Priority" ? "text-red-600" : ""}
          ${ticket.priority === "Medium Priority" ? "text-yellow-600" : ""}
          ${ticket.priority === "Low Priority" ? "text-green-600" : ""}
          `}
        >
          {ticket.priority}
        </p>
        <p className="text-[#627382]">{ticket.customer}</p>
        <p className="text-[#627382]">
          <i className="fa-regular fa-calendar"></i> {ticket.createdAt}
        </p>
      </div>
    </div>
  );
};

export default Ticket;
