import React from 'react';

import {
    Card, Button, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';
  
  const Searchcards = (props) => {
    return (
     
        <Card>
          
          <CardBody>
            <CardTitle>Strain: {props.name}</CardTitle>
            <CardSubtitle>Type: {props.race}</CardSubtitle>
            <CardText>Ailment: {props.effect}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
       
    );
  };
  
  export default Searchcards;