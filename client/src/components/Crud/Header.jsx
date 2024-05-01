import React from "react";
import Sidebar from "../../mains/sidebar/Sidebar";
import Navbar from "../../mains/navbar/Navbar";
import "./Header.scss";
// import List from "./List";
// import Crud from "./Crud";
const Header = ({ setIsAdding }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="Header">
        <div className="headerContainer">
          <Navbar />
          <button
            style={{ marginTop: "20px", marginBottom: "24px" }}
            onClick={() => setIsAdding(true)}
            className="button round-button  "
          >
            Add employee
          </button>

          {/* <Crud /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
