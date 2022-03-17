import React, {useEffect, useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'


function handleAccounts() {

  useEffect(() => {
    const apiURL = 'http://127.0.0.1:8000/users'
    fetch(apiURL)
      .then((data) => data.json())
      .then((users) => {
        console.log(users);

      });
  })

}
    
function AccountsButton() {
  return (
  <button onClick={handleAccounts} variant="primary">
    get accounts
  </button>
  )
}

function LoginPage(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button onClick={props.onClick} variant="primary" type="submit">
        Login
      </button>

    </Form>

  );
}



function LogoutPage(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


  
function LoginControl(props) {
  const [loggedInStatus, setLogIn] = useState(props.isLoggedIn)
  let button

  if (loggedInStatus) {
    button = <LogoutPage onClick={() => setLogIn(false)} />;
  } else {
    button = <LoginPage onClick={() => setLogIn(true)} />;
  }


  return(
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {button}
          <AccountsButton />
        </Offcanvas.Body>
    </>
  )
}



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
          <LoginControl isLoggedIn={false} />
        </Offcanvas>
      </>
    );
  }

  export default Profile