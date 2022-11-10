import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  const [ people, setPeople ] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route element={<Main people={people} setPeople={setPeople}/>} path="/people/" />
        <Route element={<Detail people={people} setPeople={setPeople}/>} path="/people/:id" />
        <Route element={<Update people={people} setPeople={setPeople}/>} path="/people/edit/:id"/>
      </Routes>
    </div>
  );
}

export default App;
