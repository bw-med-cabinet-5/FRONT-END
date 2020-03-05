import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteStrain} from '../actions/userActions'
import {editStrain} from '../actions/userActions'

import EditStrain from '../components/EditStrain'

const StrainSection = (props) => {
    console.log(props)

    const[currentStrain, setCurrentStrain] = useState(null)
    const[isEditing, setIsEditing] = useState(false)
    const[fav, setFav] = useState(false)

    const strainId = props.match.strain_id
    console.log(strainId)

    useEffect(() => {
        let picked = props.cabinet.filter(strain=> (Number(strain.strain_id) === Number(strain.strainId))
        )
        setCurrentStrain(picked[0])
    }, [strainId, props.cabinet])
    
    useEffect(()=> {
        if(currentStrain){setFav(currentStrain.starred)}
    }, [currentStrain])

    console.log('currentStrain')
    console.log(currentStrain)

    const handleClick = () => {
        setIsEditing(!isEditing)
    }

    const reqDelete = () => {
        props.deleteStrain(currentStrain)
        props.history.push('/strains')
    }
    
    const handleFavChange = () => {
        console.log(currentStrain.strain.name)
        const editedStrain = {...currentStrain, 'starred': !fav}
     
        setFav(!fav)
    }

    return (
        <div>
        <div>
            {currentStrain && <h3>{currentStrain.strain_name}</h3>}
            {currentStrain && <p>{currentStrain.strain_type}</p>}
            {currentStrain && <p>{currentStrain.strain_description}</p>}
            {currentStrain && <p>{currentStrain.strain_effects}</p>}
            {currentStrain && <p>{currentStrain.strain_flavors}</p>}
        </div>
        <button onClick={handleClick}>{isEditing? 'Cancel' : 'Edit'}</button>
        {isEditing && currentStrain && <EditStrain strain={currentStrain} toggleEdit={handleClick}/>}
        <button onClick={reqDelete}>Delete</button>
        </div>
    )

}

const mapStateToProps = state => {
    return{...state, cabinet: state.cabinet}
}
export default connect(
    mapStateToProps,
    {deleteStrain, editStrain}
)(StrainSection)

