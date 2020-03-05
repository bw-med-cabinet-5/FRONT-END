import React, {useState} from 'react'
import {addStrain} from '../actions/userActions'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner';


function AddStrain(props) {
    const[strain, setStrain] = useState({
        strain_id: '',
        strain_name:'',
        strain_type: '',
        strain_rating: '',
        strain_description: '',
        strain_effects: '',
        strain_flavors: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addStrain(strain)
        props.toggleAdd()
    }

    const handleChange = (e) => {
        setStrain({...strain, [e.target.name]: e.target.value})
    }

   /*FAV CHANGE HANDLE

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox'? e.target.checked : e.target.value
        setStrain({...strain, [e.target.name]:value})
    }
**/
    return (
        <div className='add-strain-cta'>
            <form onSubmit={handleSubmit}>
<legend>Strain</legend>

{/*NAME FIELD*/}
<div className='field-cta'>
    <label htmlFor='strain_name'>Name:</label>
    <input
    required
    type='text'
    name='strain_name'
    id='strain_name'
    placeholder='Name'
    onChange={handleChange}
    value={strain.strain_name}
    />
</div>
{/*TYPE FIELD*/}
<div className='field-cta'>
    <label htmlFor='strain_name'>Type:</label>
    <input
    required
    type='text'
    name='strain_type'
    id='strain_type'
    // placeholder='Type'
    onChange={handleChange}
    value={strain.strain_type}
    />
</div>
{/*DESCRIPTION FIELD*/}
<div className='field-cta'>
    <label htmlFor='strain_description'>Description:</label>
    <input
    type='textbox'
    name='strain_description'
    id='strain_description'
    // placeholder='Description'
    onChange={handleChange}
    value={strain.strain_description}
    />
</div>
{/*EFFECT FIELD*/}
<div className='field-cta'>
    <label htmlFor='strain_effects'>Effect:</label>
    <input

    type='textbox'
    name='strain_effects'
    id='strain_effects'
    // placeholder='Effects'
    onChange={handleChange}
    value={strain.strain_effects}
    />
</div>
{/*EFFECT FIELD*/}
<div className='field-cta'>
    <label htmlFor='strain_flavors'>Flavors:</label>
    <input
    type='textbox'
    name='strain_flavors'
    id='strain_flavors'
    // placeholder='Flavors'
    onChange={handleChange}
    value={strain.strain_flavors}
    />
</div>
    <button type='submit'>Add</button>
        {(props.isAddingRestaurant && <Loader type="ThreeDots" color="white" height={80} width={80} />)}

            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps,
    {addStrain}
)(AddStrain)