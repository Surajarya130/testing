import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import AddAuthor from "../pages/AddAuthor";
import Authors from "../pages/dashboard/Authors";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/Login";


export default function PrivateRoutes() {
    return (
        // <Router>
          <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/authors" element={<Authors />}/>
            <Route exact path="/add-author" element={<AddAuthor />}/>
          </Routes>
      // </Router>

    )
}