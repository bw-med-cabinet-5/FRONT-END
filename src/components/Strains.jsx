import React, { useState } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {deleteStrain} from '../actions/userActions'


const Strain = (props) => {
    console.log(props)
    return(
        <div>
            {/* <Link to={`/users/${props.strain.strain_id}`}>
                <h3>{props.strain_name}</h3>
                <p>{props.strain.type}</p>
            </Link> */}

        </div>
    )
}

const mapStateToProps = state => {
    return state;
  };
  
export default connect(
    mapStateToProps,
    {deleteStrain  }
)(Strain);