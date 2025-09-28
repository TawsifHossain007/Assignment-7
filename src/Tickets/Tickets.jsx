import React, { use } from 'react';
import Ticket from '../Ticket.jsx/Ticket';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';


const Tickets = ({fetchTickets,setTaskStatus,taskStatus}) => {
    const ticketData = use(fetchTickets)
    return (
        <div className='max-w-[1200px] mx-auto mt-20 grid grid-cols-10 gap-4'>

            <div className='col-span-8'>
                <h1 className='text-[24px] font-semibold'>Customer Tickets</h1>
                <div className='grid grid-cols-2 gap-8 mt-6'>
                   {
                    ticketData.map(ticket => <Ticket setTaskStatus={setTaskStatus} taskStatus={taskStatus} ticket={ticket} ></Ticket>)
                 }
                </div>
                 
            </div>
            <div className='col-span-2'>
                <TaskStatus taskStatus={taskStatus} setTaskStatus={setTaskStatus} ticketData={ticketData}></TaskStatus>
                <ResolvedTask></ResolvedTask>
                
            </div>
        </div>
    );
};

export default Tickets;