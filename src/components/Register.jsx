import React, {useState} from 'react'
import {registerUser} from '../actions/userActions'
import {connect} from 'react-redux'
import {userHistory} from 'react-router-dom'
 import Loader from 'react-loader-spinner'
 import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Register(props) {

    const[newUser, setNewUser] = useState ({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
    })
    

    const handleSubmit = (e) => {
        e.preventDefault()
        props.registerUser(newUser, props.history)
        props.toggleRegister()
        console.log(newUser, props.history)
    }

    const handleChange = (e) => {
      console.log(e.target.value)
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }


    return (
        <div className='main-cta register-cta'>
            <h1 className='page-title'>Register</h1>
            <form onSubmit={handleSubmit}>
{/*START OF FIRST NAME FIELD*/} 
        <div className='field-wrap first-name-field'  >
          <label htmlFor='first_name'>First Name </label>
          <input
            required 
            type='text'
            name='first_name'
            id='first_name'
            placeholder='First Name'
            onChange={handleChange}
            value={newUser.first_name}
          />
          </div>

{/*START OF LAST NAME FIELD*/} 
        <div className='field-wrap last-name-field'  >
          <label htmlFor='last_name'>Last Name </label>
          <input
            required 
            type='text'
            name='last_name'
            id='last_name'
            placeholder='Last Name'
            onChange={handleChange}
            value={newUser.last_name}
          />
          </div>
{/*START OF EMAIL FIELD*/} 
        <div className='field-wrap email-field'>
          <label htmlFor='email'>Email </label>
          <input 
            required
            type='email'
            name='email'
            id='email'
            placeholder='email'
            onChange={handleChange}
            value={newUser.email}
          />
          </div>

{/*START OF PASSWORD FIELD*/} 
        <div className='field-wrap password-field'>
          <label htmlFor='password'>Password </label>
          <input 
            required
            type='password'
            name='password'
            id='password'
            placeholder='password'
            onChange={handleChange}
            value={newUser.password}
          />
          </div>
    

{/*START OF CONFIRM PASSWORD FIELD*/} 
        {/* <div className='field-wrap password-field'>
          <label htmlFor='confirm_password'>Confirm Password </label>
          <input 
            required
            type='password'
            name='confirm_password'
            id='confirm_password'
            placeholder='confirm password'
            onChange={handleChange}
            value={users.confirm_password}
          />
          </div> */}

{/*START OF ACCEPT TERMS FIELD*/} 
        <div className='checkbox-wrap terms-checkbox'>
            <div className='terms-conditions-wrap'>
            <label htmlFor='accept-terms' className='terms-checkbox'><a href=''>Accept terms and conditions</a></label>
            <input required type='checkbox' name='terms' checked={newUser.terms} style={{ marginTop: `6px`, marginLeft: `15px`, padding: `5px` }} />
            </div>
        </div>

          <button type='submit'>Register</button>
        {(props.isRegistered && <Loader type='ThreeDots' color='white' border='1px solid black' height={40} width={40} />)}

        </form>
  
        </div>
    )
}

const mapStateToProps = state => {
    return state
};

export default connect (
    mapStateToProps,
    {registerUser}
)(Register)

