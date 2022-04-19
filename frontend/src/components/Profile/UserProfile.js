import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/esm/Button';


export default function UserProfile(props) {
    const handleLogout = () => {
      props.setLogIn
      sessionStorage.logged_in = false
      sessionStorage.user = ''
  
      
      window.location.href = '/'
  
    }
    console.log(props.user)
    return (<>
        <h2>{props.user.username}</h2>
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
  }