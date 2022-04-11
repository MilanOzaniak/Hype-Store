import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavMenu } from './components/Navbar/NavbarElements';
import Announcement from './components/Announcement';
import Home from './pages/index';
import About from './pages/about';
import Shoes from './pages/shoes';
import Clothing from './pages/clothing';
import Accessories from './pages/accessories';
import Contactus from './pages/contactus';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <NavMenu />
        <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route path='/about'> <About/> </Route>
        <Route path='/shoes'> <Shoes/> </Route>
        <Route path='/clothing'> <Clothing/> </Route>
        <Route path='/accessoreis'> <Accessories/> </Route>
        <Route path='/contactus'> <Contactus/> </Route>
        <Route path='/signup'> <SignUp/> </Route>
        </Switch>
    </Router> 
  );
};


export default App;