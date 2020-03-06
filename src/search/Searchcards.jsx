import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';

const Btn = styled(Button)`
margin-top: .5rem;
`
const Searhcards = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='main-cta'>
      <Btn color="success" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.name}</Btn>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
         <p>Strain: {props.name}</p>  
         <p>Race: {props.race}</p>
         <p>Description: {props.desc}</p>
         <p>Effects: {props.effect}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

 export default Searhcards;
 