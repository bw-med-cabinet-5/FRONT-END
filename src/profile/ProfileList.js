import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import AddProfileForm from './AddProfile';
import Profile from './Profile';


const ProfilesList = props => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axiosWithAuth().get('/profiles')
        .then(res => {
            console.log(res);
            setProfiles(res.data);
            setLoading(false);
        })
        .catch(err=> console.log(err));
    }, []);

    const addProfile = newProfile => {
        setLoading(true);
        console.log(newProfile);     
        axiosWithAuth().post('/profiles', newProfile)
        .then(res => {
            console.log(res);
            setProfiles(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }

    const deleteProfile = profile => {
        setLoading(true);
        console.log(profile);
        axiosWithAuth().delete(`/profiles/${profile.id}`)
            .then(res => {
                console.log(res);
                setProfiles(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    const editProfile = profile => {
        console.log('Time to edit profile');
        console.log(profile);
        
        setLoading(true);
        axiosWithAuth().put(`/profiles/${profile.id}`, profile)
            .then(res=> {
                console.log(res);
                setProfiles(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
            
    }

    return (
        <div>
            <AddProfileForm addProfile={addProfile}/>
            <h2>Profiles</h2>
            <div className='profile-box-cta'>
                {loading && <p>Loading...</p>}
                {profiles && profiles.map(profile => {
                    return (<Profile key={profile.id} profile={profile} deleteProfile={deleteProfile} editProfile={editProfile}/>)})}
            </div>
        </div>
    );
};

export default ProfilesList;