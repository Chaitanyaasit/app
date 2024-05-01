import React from "react";
import "./Dashboard.scss";
import Sidebar from "../../mains/sidebar/Sidebar";
import Navbar from "../../mains/navbar/Navbar";
import Widgets from "../../mains/widgets/Widgets";
import Table from "../../mains/table/Table";
const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="employees" />
          <Widgets type="job view" />
          <Widgets type="job applied" />
          <Widgets type="balance" />
        </div>

        <div className="listContainer">
          <div className="listTitle">Employement status</div>
          <Table />
        </div>
      </div>
      {/* <a href="/">Log out</a> */}
    </div>
  );
};

export default Dashboard;
