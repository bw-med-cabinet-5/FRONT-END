import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/userActions'
import '../assets/header.css'

const Header = (props) => {
   
    return (
        <div>
            <h1 className='header-title'>Medical Mary</h1>
      
                <nav>
                    <NavLink activeClassName='nav-links--active' className='nav-link' to='/' >Login</NavLink>
                    <NavLink activeClassName='nav-links--active' className='nav-link' to='/users' >Home</NavLink>
                    <NavLink activeClassName='nav-links--active'  className='nav-link'  to='/strain' >Strains</NavLink>
                    <NavLink activeClassName='nav-links--active'  className='nav-link'  to='/profile' >Profile</NavLink>
                    <NavLink activeClassName='nav-links--active'  className='nav-link'  to='/Card' >Card</NavLink>
                </nav>
             
        </div>
    )
}

const mapStateToProps = state => {
    return{
        ...state,
        isLoggedIn:state.isLoggedIn,
        first_name: state.first_name,
        email: state.email
    }
}

export default connect(
    mapStateToProps,
    {logoutUser}
)(Header)