import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';

  export class Learn extends React.Component{
    constructor(props){
        super();
    } 
    
  }
   const LearnMore = (props) => {
       console.log('props', props)
    return (
      <div>
        <Card>
          
          <CardBody>
            <CardTitle>Strain: {props.name}</CardTitle>
            <CardSubtitle>Race: {props.name}</CardSubtitle>
            <CardText>Description: {props.desc}</CardText>
            
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default LearnMore;