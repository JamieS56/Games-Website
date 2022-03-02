import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function SearchBar(){
    return(
        <Form className="col-12">
            <div class="input-group mb-3">
                <input type="text" class="form-control"  aria-label="Search Bar" aria-describedby="basic-addon2"/>
                <div className="input-group-text" id="basic-addon2">
                    <span className="material-icons">search</span>
                </div>
            </div>
        </Form>
    )
}

export default SearchBar