import React, { useState } from 'react';
import {
    Card, Button, CardTitle, CardText, 
    CardSubtitle, CardBody,Col, Form, FormGroup, Label, Input
  } from 'reactstrap';


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
        <div>
        <Card className= 'profile-box-wrap'>
        <CardBody className='profileBox'>
            <CardTitle>{profile.name}</CardTitle>
            <CardSubtitle>Type: {profile.profile} </CardSubtitle>
            <CardText>{profile.effects}</CardText>
            <Button className='delete' onClick={handleDeleteClick}>delete</Button>
            <Button className='edit' onClick={handleEditClick}>edit</Button>
            </CardBody>

        </Card>

<div className='editBox'>
{isEditing && <Form onSubmit={handleSubmit}>
    <FormGroup >
    <Label  htmlFor='name'>Name: </Label >
    <Input  type='text' name='name' value={profileToEdit.name} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
    <Label htmlFor='profile'>Type: </Label>
    <Input  type='text' name='profile' value={profileToEdit.profile} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
    <Label htmlFor='effects'>Effects: </Label>
    <Input  type='text' name='effects' value={profileToEdit.effects} onChange={handleChange} />
    <Button type='submit'>Submit</Button>
    </FormGroup >
</Form>}
</div>
</div>
    )
}

export default Profile;