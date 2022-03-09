import React from "react"
import Form from 'react-bootstrap/Form'

import InputGroup from 'react-bootstrap/InputGroup'

function SearchBar(){
    return(
        <Form id="search-bar" className="col-12">
            <div className="input-group mb-3">
                <input type="text" className="form-control"  aria-label="Search Bar" aria-describedby="search-bar-icon-container"/>
                <div id="search-bar-icon-container"className="input-group-text">
                    <span className="material-icons">search</span>
                </div>
            </div>
        </Form>
    )
}

export default SearchBar