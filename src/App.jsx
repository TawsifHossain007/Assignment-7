import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Tickets from "./Tickets/Tickets";

const fetchTickets = fetch("../public/Tickets.json").then((res) => res.json());

function App() {
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const removeTicket = (ticket) => {
    setTaskStatus(taskStatus.filter((t) => t.title !== ticket.title));
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner resolvedTask={resolvedTask} taskStatus={taskStatus}></Banner>

      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Tickets
          removeTicket={removeTicket}
          resolvedTask={resolvedTask}
          setResolvedTask={setResolvedTask}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
          fetchTickets={fetchTickets}
        ></Tickets>
      </Suspense>
    </>
  );
}

export default App;
