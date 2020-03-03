import React, {useState} from 'react';
import {Modal, Button} from 'reactstrap';


function LearnMore() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
    <div>
        
      
        <Button variant="primary" onClick={handleShow}>
          Learn More Here!
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Strain:  </Modal.Title>
          </Modal.Header>
          <Modal.Body>Description: </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
export default LearnMore;