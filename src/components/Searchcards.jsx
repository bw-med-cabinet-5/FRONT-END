import React  from 'react';
import LearnMore from './LearnMore';
import {Link} from 'react-router-dom';
import {
    Card, Button, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';
  
 

 export const Searchcards = (props) => {
    
    return (
     
        <Card>
          
          <CardBody>
            <CardTitle>Strain: {props.name}</CardTitle>
            <CardSubtitle>Type: {props.race}</CardSubtitle>
            <CardText>Ailment: {props.effect}</CardText>
    <Link to='/learnMore'><Button onClick={render(<LearnMore name={data.name} race={data.race} desc={data.desc}/>)}> Learn More</Button></Link>
          </CardBody>
        </Card>
    );
  };
  
  export default Searchcards;
 
 