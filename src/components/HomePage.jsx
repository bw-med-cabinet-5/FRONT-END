import React,{useEffect, useState} from 'react'
import {logoutUser} from '../actions/userActions'
import { connect } from 'react-redux'


import StrainList from './StrainList'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Strains from './Strains'
import StrainSection from './StrainSection'
import HttpRequest from './HttpRequest'
import AddStrain from './AddStrain'

const HomePage = props => {

    console.log(props)
 
    const {userId, setUserId} = useState(null)


    useEffect(() => {
        axios.get('/user', {
            params: {
              ID: 12345
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }, [])

    console.log(props.match.params)
    return (
        
        <div className='main-cta home-cta'>
            {props.name ? <h1>  Welcome <span className='dash-title'>{props.name}</span></h1> : <h1 className='page-title'>Welcome to your Dashboard</h1>}
            <Strains/>
            <button onClick={props.logoutUser}>Log out</button>
            <div className='component-wrap'>
                <Strains/>
           <StrainList/>
    <Link to='/users'>
        <button>Closer</button>
    </Link>


     
            </div>
        </div>
    )
    
}
// export default HomePage
const mapStateToProps = state => {
    console.log(state.id)
    return {
        ...state,
        isLoggedIn: state.isLoggedIn,
        name:state.first_name,
        // id:state.state.user.user_id
    }
    
}

export default connect(
    mapStateToProps,
    {logoutUser}
)(HomePage)