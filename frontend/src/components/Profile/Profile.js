import React, {useEffect, useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom'

import LoginPage from './LoginPage'
import UserProfile from './UserProfile'


function LoginControl(props) {

  const [loggedInStatus, setLogIn] = useState(props.isLoggedIn)
  let page
  console.log(`logged in status ${loggedInStatus}`)

  if (loggedInStatus == 'true') {
    page = <UserProfile setLogin={() => setLogIn(false)} user={props.user} />;
  } else if(loggedInStatus == 'false') {
    page = <>
    <LoginPage setLogin={() => setLogIn(true)} />
    <Link to={'create-profile'}>
            <Button>Create Account</Button>
    </Link>
    </>;
  }

  return(
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {page}
        </Offcanvas.Body>
    </>
  )
}


function Profile(props) {

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
          <LoginControl isLoggedIn={sessionStorage.logged_in} user={props.user} />

        </Offcanvas>
      </>
    );
  }

export default Profile