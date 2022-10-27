import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <Subcontents />
        <Subcontents />
        <Subcontents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
