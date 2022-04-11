import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import { BrowserRouter as Router, } from 'react-router-dom';
import { NavMenu } from './components/Navbar/NavbarElements';
import Announcement from './components/Announcement';


function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <NavMenu />
      <Hero slides={SliderData}/>
    </Router> 
  );
}





export default App;