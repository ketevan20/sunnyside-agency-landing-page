import { useEffect, useState } from "react";
import React from 'react'


const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);

  function toggleMenu() {
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  return (
    <div className='navbar-container'>
      <img src={'/images/sunnyside.png'} />
      <ul className={isClicked ? "navbar active" : "navbar"}>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='menu' onClick={toggleMenu}><img src='images/menu.svg'/></button>
    </div>
  )
}

export default Navbar