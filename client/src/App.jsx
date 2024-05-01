import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import List from "./components/list/List";
import Single from "./components/single/Single";
import New from "./components/new/New";
import { userInputs } from "./formSource";
import Crud from "./components/Crud/Crud";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add new user" />}
          />
        </Route>

        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="/crud" element={<Crud />} />
      </Routes>
    </Router>
  );
}

export default App;
