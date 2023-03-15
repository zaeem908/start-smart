import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Teachers from "./Teachers";
import Starter from "./Starter.js"
import Dashboard from "./Dashboard";
import Attendance from "./Attendance";


function App() {

  return (
    <>
    <Routes>
      <Route path="/attendance" element={<Attendance/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
    </Routes>
    </>
  );
}

export default App;
