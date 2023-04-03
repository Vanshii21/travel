import React,{useState} from 'react';
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import{TbGridDots} from 'react-icons/tb'


export const Navbar = () => {
    const [active ,setActive] = useState('navBar')
    // how to toggle navbar
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }
    //how to close navbar
    const removeNavbar=()=>{
        console.log("I am cro")
        setActive('navBar')
    }
  return (
    <section className='navBarSection'>
<header className="header flex">
<div className="logoDiv">
<a href='#' className="logo">
<h1><MdOutlineTravelExplore className="icon"/>Hey</h1>
</a>
</div>

<div className={active}>
<ul className="navLists">
<li className="navItem">
<a href='#' className="navLink">Home</a>
</li>
<li className= "navItem">
 <a href='#' className="navLink">Package</a> 
</li>
<li className="navItem">
 <a href='#' className="navLink">Shop</a>
</li>
<li className="navItem">
<a href='#' className="navLink">About</a>
</li>
<li className="navItem">
 <a href='#' className="navLink">Pages</a>
 </li>
 <li className="navItem">
 <a href='#' className="navLink">News</a>
 </li>
 <li className="navItem">
 <a href='#' className="navLink">Contact</a>
 </li>
 <button className="btn">
    <a href='#'>BOOK NOW</a>
 </button>
 </ul>

 <div onClick={removeNavbar} className="closeNavbar">
    <AiFillCloseCircle className="icon"/>
 </div>
 </div>

 <div onClick={showNav} className="toggleNavbar">
    <TbGridDots className="icon"/>
 </div>
</header>
</section>
  )
}
export default Navbar;