import React, { useState } from "react";
import Register from './Register'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/CradleLoader.css";
import { loginUser } from "../actions/userActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Login = props => {
    const[account, setAccount] = useState(false)
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user)
    props.loginUser(user, props.history);
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
      setAccount(!account)
  } 

  return (
    <div className="main-cta login-cta">
      <h1 className="page-title">Welcome</h1>

{account? <Register history={props.history} toggleRegister={handleClick}/> :
      <form onSubmit={handleSubmit}>
        <legend>Login</legend>
        <div className="field-cta email">
          <label className="label-login label-email" htmlFor="email">
            Email
          </label>
          <input
            required
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>

        <div className="field-cta password">
          <label className="label-login label-password" htmlFor="password">
            Password{" "}
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn login-btn" type="submit">
          Login
        </button>
        {props.isLoggingIn && (
          <Loader type="ThreeDots" color="white" height={80} width={80} />
        )}
      </form>
}          <NavLink to='/register'>Register</NavLink>

    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { loginUser })(Login);
