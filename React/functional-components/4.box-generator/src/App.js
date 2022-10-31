import React, { useState } from 'react';
import Userform from './components/Userform';
import Boxes from './components/Boxes';

function App() {
  const [attributes, setAttributes] = useState([]);

  return (
    <>
      <Userform attributes = { attributes } setAttributes = { setAttributes }/>
      <Boxes attributes = { attributes } />
    </>
  );
}
export default App;