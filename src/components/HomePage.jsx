import React, { useEffect, useState } from "react";
import { logoutUser } from "../actions/userActions";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";
import Rocks from '../rocks.jpg'
const HomePage = props => {
  console.log(props);

  const { userId, setUserId } = useState(null);

  useEffect(() => {
    axios
      .get("/user", {
        params: {
          ID: 12345
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  console.log(props.match.params);
  return (
    <div className="main-cta home-cta">
      <button className='logout-btn' onClick={props.logoutUser}>Log out</button>
      <div className='welcome-header'><h1>Welcome {props.first_name}</h1></div>
      <h6>Match the strain to your pain</h6>
      <div className="component-wrap">

        <img className='rock_img' src={Rocks} alt='Calming picture'/>

{/*TODO Create setting  */}
        {/* <Link to="/users">
          <button>Profile</button>
        </Link> */}
      </div>
    </div>
  );
};
// export default HomePage
const mapStateToProps = state => {
  console.log(state.id);
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
    name: state.first_name
    // id:state.state.user.user_id
  };
};

export default connect(mapStateToProps, { logoutUser })(HomePage);
