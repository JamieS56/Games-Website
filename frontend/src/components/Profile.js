import React, {useState} from 'react'
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

function AccountsButton(props) {
  return (
  <button onClick={props.onClick} variant="primary">
    get accounts
  </button>
  )
}
  
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleAccounts() {
    const apiURL = 'http://127.0.0.1:8000/users'
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutPage onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginPage onClick={this.handleLoginClick} />;
    }


    return(
      <>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {button}
            <AccountsButton onClick={this.handleAccounts}/>


          </Offcanvas.Body>
      </>
    )
  }

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
          <LoginControl />
        </Offcanvas>
      </>
    );
  }

  export default Profile