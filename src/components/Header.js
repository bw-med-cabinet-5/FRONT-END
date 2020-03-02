import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/header.css'

const Header = () => {


    return (
        <div>
            <h1 className='header-title'>Medical Mary</h1>
                <nav>
                    <NavLink className='nav-links records' to='/homepage' >Home</NavLink>
                    <NavLink className='nav-links records' to='/' >Login</NavLink>
                    <NavLink className='nav-links records' to='/register' >Register</NavLink>
                    <NavLink className='nav-links records' to='/records' >Records</NavLink>
                    <NavLink className='nav-links reccommendations' to='/recommendations'>Recommendations</NavLink>
                </nav>
        </div>
    )
}

export default Header