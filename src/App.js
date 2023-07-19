import React from "react";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Homepage';
import About from './Components/pages/About';


function App() {
  return (
    <div className="appbody">
<Navbar/>
    
    
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Routes>
        </div>
      
  );
}

export default App;
