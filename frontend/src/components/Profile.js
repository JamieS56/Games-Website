import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button'


function Profile() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button id="profile-button" className="offcanvas-button col-6" onClick={handleShow}>
        <span className="material-icons offcanvas-icon">
            person
        </span>
        </Button>
  
        <Offcanvas className='offcanvas-page' show={show} onHide={handleClose}  placement={'end'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default Profile