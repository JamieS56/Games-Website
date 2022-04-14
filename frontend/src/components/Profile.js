import React, {useEffect, useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import postFormData from '../../helpers/postFormData'



function LoginPage(props) {

  const [validated, setValidated] = useState(false);

  const handleLogin = (event) =>{
    const address = 'http://127.0.0.1:8000/api/login/'
    const form = document.getElementById('LoginForm')
    const getResponse = async () => {
      let response = await postFormData(address, form, event)

      let data = await response.json()
      console.log(data)
      if(data == true){
        props.setLogIn
        sessionStorage.logged_in = true
        window.location.href = '/'

      }else {
        const errorBox = document.getElementById('errorBox')
        errorBox.innerHTML = ``
        errorBox.innerHTML = 'Username or password was incorrect please try again.'

      }
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true)

    }else{
      getResponse()
    }
  }

  return (
    <Form id='LoginForm' noValidate validated={validated} onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control required type="text" placeholder="Username" name='username'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" name='password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div id='errorBox' className='mb-3'></div>


    </Form>

  );
}


function LogoutPage(props) {
  const handleLogout = () => {
    props.setLogIn
    sessionStorage.logged_in = false

    console.log(`session storage ${sessionStorage.logged_in}`)
    window.location.href = '/'

  }

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
}


function LoginControl(props) {

  const [loggedInStatus, setLogIn] = useState(props.isLoggedIn)
  let page
  console.log(`logged in status ${loggedInStatus}`)

  if (loggedInStatus == 'true') {
    page = <LogoutPage setLogin={() => setLogIn(false)} />;
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
          <LoginControl isLoggedIn={sessionStorage.logged_in} />

        </Offcanvas>
      </>
    );
  }

export default Profile