import React, {useEffect, useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Feedback from 'react-bootstrap/Feedback'
import postFormData from '../../helpers/postFormData'

function CreateProfile() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        let passwordChecks = true

        // HTML validity checks 
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        }

        


        // Checks if passwords are the same.
        if ($('#Password').val() != $('#ConfirmPassword').val()) {
            console.log('hi')
            event.preventDefault();
            event.stopPropagation();
            // $('#CreateAccountForm').removeClass('was-validated')
            $('.formPassword > input').addClass('is-invalid form-control:invalid')
            $('.passwordError').text('The passwords you entered are not the same.')

            passwordChecks = false
        }


        // If client side validation is passed the form data is sent to the server
        if (form.checkValidity() && passwordChecks) {
            
            const address = 'http://127.0.0.1:8000/api/create-profile/'
            const form = document.getElementById('CreateAccountForm')
            const getResponse = async () => {
                const response = await postFormData(address, form, event);
                console.log(response)

                if (response.status == 200) {
                    // If the data is processed successfully user is taken to home page to login
                    console.log('success')
                    window.location.href = '/'

                } else if (response.status == 400) {
                    // If data is not processed the server will return the relevent errors which get displayed to the user

                    let data = await response.json()
                    const errorBox = document.getElementById('errorBox')
                    errorBox.innerHTML = ``

                    for (const i in data) {
                        // $('#CreateAccountForm').removeClass('was-validated')
                        console.log(data[i])
                        console.log(i)

                        if ( i == 'username'){
                            $('#username > input').addClass('is-invalid form-control:invalid')
                        } else if( i == 'email'){
                            $('#email > input').addClass('is-invalid form-control:invalid')
                        }
                        errorBox.innerHTML += `${data[i]} <br>`
                    }
                }
            }


            getResponse();

        }

        
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

                <Form.Group className="mb-3" id='username' controlId="Username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="Username" name='username' />
                </Form.Group>

                <Form.Group className="mb-3" id='email' controlId="Email">
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
                <div id='errorBox' className='mb-3'></div>

                <Button variant="primary" type="submit">
                  Create Account
                </Button>
            </Form>
            </Container>
        </>
    )
}

export default CreateProfile