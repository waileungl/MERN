import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
        <Route element={<Update/>} path="/people/edit/:id"/>
      </Routes>
    </div>
  );
}

export default App;
