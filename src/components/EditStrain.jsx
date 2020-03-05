import React,{useState} from 'react'
import { editStrain } from '../actions/userActions'
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

const EditStrain = (props) => {
        console.log('edit form')
        console.log(props)
        const[strain, setStrain] = useState({
            strain_id: props.strain.strain_id,
            strain_name:props.strain.strain_name,
            strain_type:props.strain.strain_type,
            strain_rating:props.strain.strain_rating,
            strain_description: props.strain.strain_description,
            strain_effects:props.strain.strain_effects,
            strain_flavors:props.strain.strain_flavors,
        })

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(strain)
            props.editStrain(editStrain);
            props.toggleEdit();
          };


          const handleChange = (e) => {
            const value = e.target.value;
            setStrain({...strain, [e.target.name]: value });
          };
        
    return (
        <div className='add-strain-cta'>
        <form onSubmit={handleSubmit}>
<legend>Edit Strain</legend>

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
<button type='submit'>Submit</button>
    {(props.isAddingRestaurant && <Loader type="ThreeDots" color="white" height={80} width={80} />)}

        </form>
    </div>
)
    
}


const mapStateToProps = state => {
    return state;
  }
  
  export default connect(
    mapStateToProps,
    { editStrain }
  )(EditStrain)