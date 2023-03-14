import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";


function App() {

  return (
    <>
    <Home/>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
    </Routes>
    </>
  );
}

export default App;
