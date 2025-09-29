import React from "react";

const ResolvedCard = ({ resTask }) => {
  return (
    <div>
      <div className="bg-[#e0e7ff] p-4 rounded-[2px] shadow-md mt-4">
        <h1 className="text-[16px] font-medium">{resTask.title}</h1>
      </div>
    </div>
  );
};

export default ResolvedCard;
