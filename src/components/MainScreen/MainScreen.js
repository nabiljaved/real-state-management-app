import React, { useState } from 'react'
import './Main.css'
import { AiOutlineMenu } from "react-icons/ai";

import { pink } from '@mui/material/colors';



export default function MainScreen() {

  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
    console.log(toggle)
    
}

const MobileNav = () => {
    return (
      <nav className='mobile-nav' >
        <div  className="mobile-nav_topbar">
            <ul className='mobile-nav_topbar_list1'>
              <li className='mobile-nav_topbar_list1_item'> <AiOutlineMenu size={50} color={pink[500]} onClick={menuToggle}/></li>
            </ul>
            <ul className='mobile-nav_topbar_list2'>
            <li className='mobile-nav_topbar_list2_item'> Nabeel Javed </li>
            <li className='mobile-nav_topbar_list2_item'> 
               <a href="index.html" className="main-header__brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwj2YK4IT8kJKQS7a57mwtW1tDedIj4lobQ&usqp=CAU" alt="uHost - Your favorite hosting company"/>
               </a>
            </li>
            
            </ul>
        </div>
      <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
              <a href="packages/index.html">Property</a>
          </li>
          <li className="mobile-nav__item">
              <a href="customers/index.html">Tenant Contract</a>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
              <a href="start-hosting/index.html">Rooms</a>
          </li>
       </ul>
    </nav>
  )
}


  return (
    <div>
          {/*Navigation*/}
      <div className='main-nav'>
      <nav className="main-nav">
            <ul className='login_status'>
              <li>Nabeel Javed</li>
              <li>
              <a href="index.html" className="main-header__brand">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="uHost - Your favorite hosting company"/>
              </a>
              </li>
            </ul>
    
            <ul className="main-nav__items">
                <li className="main-nav__item main-nav__item_first">
                  <AiOutlineMenu size={50} color={pink[500]} onClick={menuToggle}/>
                </li>
                <li className="main-nav__item main-nav__item_second">
                    <a href="packages/index.html">Craft Property Management</a>
                </li>
                <li className="main-nav__item">
                    <a href="packages/index.html">Property</a>
                </li>
                <li className="main-nav__item">
                    <a href="customers/index.html">Tenant Contarct</a>
                </li>
                <li className="main-nav__item main-nav__item--cta">
                    <a href="start-hosting/index.html">Rooms</a>
                </li>
            </ul>
        </nav> 
      </div>  
  
      {/*Mobile Navigation*/}

      {toggle &&  <MobileNav/>}

    

      <div className='main_container' >
        <h1 className='main_heading'>WELCOME TO CRAFT PROPERTY MANAGEMENT</h1>
        <div className='option_container'>
            <div className='options option1'>
              <h1>Property</h1>
              <div className='option_backdrop'></div>
            </div>
            <div className='options option2'>
            <h1>Contracts</h1>
              <div className='option_backdrop'></div>
            </div>
            <div className='options option3'>
            <h1>Rooms</h1>
              <div className='option_backdrop'></div>
            </div>
        </div>
      </div>
    </div>
    
  )
}
