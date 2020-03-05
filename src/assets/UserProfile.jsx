import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'


const UserProfile = (props) => {

//USER DELETE
/*
const handleDelete = () => {
    const {match: {params}} = this.props
    axios.delete(`api/users/${params.user_id}`)
    history.pushState('/users')
}
*/
    return (
        <div className='main-cta user-profile-cta'>
            <h1 className='page-title'>Records</h1>
            <div className='profile-inner-cta'>
                <h5>Name: <span className='profile-label'>{props.strain_name}</span></h5>
                <h5>Type: <span className='profile-label'>{props.strain_type}</span></h5>
                <h5>Description: <span className='profile-label'>{props.strain_description}</span></h5>
                <h5>Effects: <span className='profile-label'>{props.strain_effects}</span></h5>
                <h5>Flavors: <span className='profile-label'>{props.strain_flavors}</span></h5>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        ...state,
    email: state.email,
    strain_name: state.strain_name,
    strain_type: state.strain_type,
    strain_description: state.strain_description,
    strain_effects: state.strain_effects,
    strain_flavors: state.strain_flavors,
    cabinet: state.cabinet
    };
};

export default connect(
    mapStateToProps,
    { }
  )(UserProfile);
