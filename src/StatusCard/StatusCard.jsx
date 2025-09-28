import React from 'react';

const StatusCard = ({ticket}) => {
    return (
        <div  className='bg-white p-4 rounded-[4px] shadow-md mb-4 '>
            <h1 className='text-[15px] font-medium '>{ticket.title}</h1>
            <div className='flex'>
                <button className='bg-[#02a53b] flex-1 p-1.5 text-white rounded-[4px] mt-2'>Complete</button>
            </div>
            
        </div>
    );
};

export default StatusCard;