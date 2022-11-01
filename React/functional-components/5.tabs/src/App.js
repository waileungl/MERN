import React, { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  const[tabs, setTabs] = useState([
    {label:"Tab1", content:"You choose Tab1!"},
    {label:"Tab2", content:"You choose Tab2!"},
    {label:"Tab3", content:"You choose Tab3!"},
  ])

  return (
    <>
      <Tabs tabs = { tabs } setTabs = { setTabs } />
    </>
  );
}
export default App;