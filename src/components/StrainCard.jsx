import React from 'react'
import {deleteStrain} from '../actions/userActions'
import { connect } from 'react-redux'

const  StrainCard = props => {
    

    return (
        <div>

            <h4>{props.strain_id}</h4>
            <h4>{props.strain_name}</h4>
            <h4>{props.strain_type}</h4>
        </div>
    )
}


const mapStateToProps = state => {
    return state
}
export default connect(
    mapStateToProps,
    {deleteStrain}
)(StrainCard)