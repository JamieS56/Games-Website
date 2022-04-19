import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/esm/Button';

import Form from 'react-bootstrap/Form'
import postFormData from '../../../helpers/postFormData'

export default function LoginPage(props) {

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

        sessionStorage.user = document.getElementById('login-username').value
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
      <Form.Group className="mb-3" controlId="login-username">
        <Form.Label>Username</Form.Label>
        <Form.Control required type="text" placeholder="Username" name='username'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="login-password">
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