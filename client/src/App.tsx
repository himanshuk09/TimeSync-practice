import React from 'react';

import './App.css';


import { Outlet } from 'react-router-dom';
import { Home } from './components/Home';


function App() {
  return (
    <div className="App">
       <Home/>
      
    </div>
  );
}

export default App;
