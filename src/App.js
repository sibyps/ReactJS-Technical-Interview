import React, { useState } from "react";
import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";

export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/add-teacher" element={<Add header={"Add Teacher"} label={"Department"}/>} />
          <Route path="/admin/add-student" element={<Add header={"Add Student"} label={"Class"}/>} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/add-student"
            element={<h1>add student route</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
