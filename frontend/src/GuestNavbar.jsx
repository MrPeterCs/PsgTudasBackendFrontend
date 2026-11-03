import {Link} from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
export default function GuestNavbar()
{
    return(
        <Navbar expand className="bg-body-tertiary">
            <Container>
                <Nav className="me-auto flex-row gap-4">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="register">Regisztráció</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}