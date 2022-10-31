import React from 'react';
import Personcard from './components/Personcard';

function App() {
  return (
    <>
      <Personcard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
      <Personcard firstName="Smith" lastName="John" age={88} hairColor="Brown"/>
      <Personcard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown"/>
      <Personcard firstName="Smith" lastName="Maria" age={62} hairColor="Brown"/>
    </>
  );
}
export default App;