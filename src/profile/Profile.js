import React, { useState } from 'react';

const Profile = ({ profile, deleteProfile, editProfile }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileToEdit, setProfileToEdit] = useState(profile);

    const handleDeleteClick = () => {
        //console.log(profile);
        deleteProfile(profile);
    }

    const handleEditClick = () => {
        setIsEditing(true);  
    }

    const handleSubmit = e => {
        e.preventDefault();
        editProfile(profileToEdit);
        setIsEditing(false);
    }

    const handleChange = e => {
        setProfileToEdit({...profileToEdit, [e.target.name]: e.target.value})
    }

    return (
        <div className= 'profile-box-wrap'>
        <div className='profileBox'>
            <h3>{profile.name}</h3>
            <p>Type: {profile.profile} </p>
            <p>{profile.effects}</p>
            <button className='delete' onClick={handleDeleteClick}>delete</button>
            <button className='edit' onClick={handleEditClick}>edit</button>
            </div>
<div className='editBox'>
            {isEditing && <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={profileToEdit.name} onChange={handleChange} />
                
                <label htmlFor='profile'>Type: </label>
                <input type='text' name='profile' value={profileToEdit.profile} onChange={handleChange} />
                
                <label htmlFor='effects'>Effects: </label>
                <input type='text' name='effects' value={profileToEdit.effects} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>}
            </div>
        </div>
    )
}

export default Profile;