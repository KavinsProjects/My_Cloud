import React from "react";
import Imagecard from "./Imagecard";
import Videocard from "./Videocard";

const Dashboard = () => {
  return (
    <div>
      <h2>Cloud Dashboard</h2>
      <input className="main-search" placeholder="Seach in Drive" value={""} />
      <div className="uploades-container">
        <Imagecard />
        <Videocard />
      </div>
    </div>
  );
};

export default Dashboard;
