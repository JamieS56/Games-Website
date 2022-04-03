import React, {useEffect, useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Feedback from 'react-bootstrap/Feedback'
import postFormData from '../../helpers/postFormData'


function CreateProfile () {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

      const form = event.currentTarget;
      let passwordChecks = true
     
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
      }
    
      if ($('#Password').val() != $('#ConfirmPassword').val()) {
        event.preventDefault();
        event.stopPropagation();

        $('#CreateAccountForm').removeClass('was-validated')

        $('.formPassword > input').addClass('is-invalid')
        $('.passwordError').text('The passwords you entered are not the same.')

        passwordChecks = false
      }

      if (form.checkValidity() && passwordChecks){
          const address = 'http://127.0.0.1:8000/api/create-profile/'
          const form = document.getElementById('CreateAccountForm')
          postFormData(address, form, event)

      }

      setValidated(true);
    };

    return (
        <>
        <Container>
            <Row>
                <h2>Create Profile</h2>
            </Row>
            <Form id='CreateAccountForm' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="FirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control required type="text" placeholder="First Name" name='first_name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="LastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control required type="text" placeholder="Last Name" name='last_name' />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="Username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="Username" name='username' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" placeholder="Enter email" name='email' />

                </Form.Group>

                <Form.Group className="mb-3 formPassword" controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Form.Group className="mb-3 formPassword" controlId="ConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control required type="password" placeholder="Confirm Password" />
                </Form.Group>
                <div className='passwordError'></div>

                <Button variant="primary" type="submit">
                  Create Account
                </Button>
            </Form>
            </Container>
        </>
    )
}

export default CreateProfile