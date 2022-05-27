import React, {useState} from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const [displayNav, setDisplayNav] = useState(false)
    const [navButton, setNavButton] = useState("initial")

    return (
        <div className='nav'>
            <NavLink to="/" className="nav-link-title">
                <h1 className='nav-title'>Awonke</h1>
            </NavLink>
            <i 
                style={{display: {navButton}}}
                class="fa-solid fa-bars"
                onClick={() => {
                    setDisplayNav(true)
                    setNavButton("none")
                }}>
                
            </i>
            {displayNav ? <div className='nav-links'>
                <div className='nav-link'>
                    <NavLink 
                        className='link' 
                        to="/"
                        onClick={() => {
                            setDisplayNav(false)
                        }}>Home</NavLink>
                    <NavLink 
                        className='link' 
                        to="/about"
                        onClick={() => {
                            setDisplayNav(false)
                        }}>About</NavLink>
                    <NavLink 
                        className='link' 
                        to="/contact"
                        onClick={() => {
                            setDisplayNav(false)
                        }}>Contact</NavLink>
                    <a 
                        className='link'
                        rel="noopener noreferrer" 
                        target="_blank"
                        href="https://www.docdroid.net/fGnVE4p/awonke-resume-pdf"
                        onClick={() => {
                            setDisplayNav(false)
                        }}>Resume</a>
                    
                </div>
            </div> : null}
            
        </div>
    )
}

export default Navigation;