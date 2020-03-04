import React  from 'react';
import LearnMore from './LearnMore';
import {Link} from 'react-router-dom';
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
    <Link to='/learnMore'><Button > Learn More</Button></Link>
          </CardBody>
        </Card>
    );
  };
  
  export default Searchcards;
 
 