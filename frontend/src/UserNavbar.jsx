import { Link, useNavigate } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

export default function UserNavbar({ logout }) {
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }

    return (
        <Navbar expand className="bg-body-tertiary">
            <Container>
                <Nav className="me-auto flex-row gap-4">
                <Nav.Link as={Link} to="/profile">Profilom</Nav.Link>
                <Nav.Link as={Link} to="/ProductUpL">Product hozzáadása</Nav.Link>
                <Nav.Link as={Link} to="/products">Productok megtekintése</Nav.Link>
                </Nav>
                <button onClick={handleLogout}>Kijelentkezés</button>
            </Container>
        </Navbar>
    )
}