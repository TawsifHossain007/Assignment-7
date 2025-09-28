import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Tickets from "./Tickets/Tickets";

const fetchTickets = fetch("../public/Tickets.json").then((res) => res.json());

function App() {

  const [taskStatus, setTaskStatus] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Banner taskStatus={taskStatus}></Banner>

      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Tickets taskStatus={taskStatus} setTaskStatus={setTaskStatus} fetchTickets={fetchTickets}></Tickets>
      </Suspense>
    </>
  );
}

export default App;
