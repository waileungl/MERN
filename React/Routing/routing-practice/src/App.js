import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Survey from './components/Survey';


function App() {
  return (
    <div>
      <Survey />
    </div>
  );
}

export default App;
