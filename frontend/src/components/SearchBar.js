import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SearchBar(){
    return(
        <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="Enter email" />
         </Form.Group>

         <Button variant="primary" type="submit">
           Submit
         </Button>
        </Form>
    )
}

export default SearchBar