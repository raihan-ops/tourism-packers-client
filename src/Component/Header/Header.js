import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
    const {user,logout}=useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container className="">
                <Navbar.Brand href="#home">Tourism Packers</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/places">Places</Nav.Link>
                <Nav.Link as={Link} to="/booking">My Booking Info</Nav.Link>
                <Nav.Link as={Link} to="/allbooking">ALL Booking Info</Nav.Link>
                <Nav.Link as={Link} to="/addPlaces">Add Places</Nav.Link>
                <Nav.Link as={Link} to="/managePlaces">Mange Places</Nav.Link>
                
                <div >
                        {
                            user?.displayName?
                            <Navbar.Text className="d-lg-flex align-items-center"  >
                            <i class="fas fa-user-circle fa-2x "></i><span className="ms-1">{user.displayName}</span> 
                           
                        </Navbar.Text>
                            :
                            <Navbar.Text className="d-lg-flex align-items-center">
                           <i class="fas fa-user-circle fa-2x"></i> <span className="ms-1">{user.email}</span>
                        </Navbar.Text>
                           
                        }
                        </div>
                   
                {user?.email ?
                            <Button className="ms-5" onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link className="ms-5 text-white" as={Link} to="/login">Login</Nav.Link>
                            }
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;