import React from "react";
import "./List.scss";
import Sidebar from "../../mains/sidebar/Sidebar";
import Navbar from "../../mains/navbar/Navbar";
import Datatable from "../../mains/datatable/Datatable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
