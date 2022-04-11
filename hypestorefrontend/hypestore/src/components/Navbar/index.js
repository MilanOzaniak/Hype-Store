import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'><h1>HYPESTORE</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' >About</NavLink>
          <NavLink to='/shoes' >Shoes</NavLink>
          <NavLink to='/clothing' >Clothing</NavLink>
          <NavLink to='/accessories' >Accessories</NavLink>
          <NavLink to='/contactus' >Contact us</NavLink>
          <NavLink to='/signup' >Sign up</NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='/'>Add Product</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;