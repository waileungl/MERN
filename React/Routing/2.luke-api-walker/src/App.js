import React, { useState } from "react";
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Result from "./components/Result";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:id" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
