import React, { useState } from 'react';

const AddProfileForm = props => {
    const [profile, setProfile] = useState({name: '', profile: '', effects: ''});

    const handleSubmit = e => {
        e.preventDefault();
        props.addProfile(profile);
        setProfile({name: '', profile: '', effects: ''});
    }

    const handleChange = e => {
        setProfile({...profile, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h2>Strain List</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={profile.name} onChange={handleChange} />
                
                <label htmlFor='profile'>Profile: </label>
                <input type='text' name='profile' value={profile.profile} onChange={handleChange} />
                
                <label htmlFor='effects'>Effects: </label>
                <input type='text' name='effects' value={profile.effects} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddProfileForm;