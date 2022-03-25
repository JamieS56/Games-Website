import React, {useEffect, useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'





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
  const [accounts, setAccounts] = useState([])
  let button


  async function HandleGetAccounts(){
    const apiURL = 'http://127.0.0.1:8000/users/'
    try {
      const response = await fetch(apiURL)
      if(!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setAccounts(result);
    } catch(err) {
      console.log(err)
    }
  }

  async function HandleGetAccounts(){
    const apiURL = 'http://127.0.0.1:8000/users/create-profile'
    try {
      const response = await fetch(apiURL)
      if(!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setAccounts(result);
    } catch(err) {
      console.log(err)
    }
  }



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
          <button variant="primary" onClick={HandleGetAccounts}>
            get accounts
          </button>
          {accounts.map((account) => <h1 key={account.id}>{account.username}</h1>)}
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