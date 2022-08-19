import React from 'react';
// import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
//BEM
  return (
   <div className='App'>
    {/* <h1>Let's build a twitter Clone</h1> */}

    {/* Sidebar*/}
    <Sidebar />
    {/* Feed*/}
    <Feed />

    {/*Widgets*/}

    <Widgets />
   </div>
  
  );
}

export default App;
