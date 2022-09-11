import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import Scrollspy from 'react-scrollspy'

const Navbar = () => {
    const [navDisplay, setNavDisplay] = useState(false);
    
    window.onscroll = function() {
        scrollFunction()
    };
      
    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.querySelector("nav").style.height = "3rem";
            document.querySelector("nav").style.background = "white";
            document.querySelector("nav").style.boxShadow = '1px 5px 12px var(--color-gray-200)';
        } else {
            document.querySelector("nav").style.height = "7rem";
            document.querySelector("nav").style.background = "rgba(242,242,242, 95)";
            document.querySelector("nav").style.boxShadow = 'none';
        }
    }

  return (
    <nav className={`nav ${navDisplay ? 'nav_update' : ''}`}>
        <div className={`container nav_container ${navDisplay ? 'nav_container_update' : ''}`}>
            <Link to="/" className="logo" style={{color: 'var(--color-gray-500)'}} onClick={() => setNavDisplay(false)}>
                SAMUEL SON
            </Link>

            <Scrollspy className={`nav_links ${navDisplay ? 'nav_display' : 'nav_hide'}`} items={['home', 'about', 'projects', 'contact']} currentClassName={`active ${navDisplay ? 'active_update' : ''}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <Link to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setNavDisplay(prev => !prev)}>
                                    {name} 
                                </Link>
                            </li>
                        )
                    })
                }
            </Scrollspy>

            <button className="nav_toggle-btn" onClick={() => setNavDisplay(prev => !prev)}>
                {
                    navDisplay ? <MdOutlineClose/> : <GoThreeBars/>    
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar