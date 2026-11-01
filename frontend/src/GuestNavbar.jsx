import {Link} from "react-router-dom"

export default function GuestNavbar()
{
    return(
        <nav>
            <Link to="/login">Bejelentkezés </Link>
            <Link to="/register">Regisztráció</Link>
        </nav>
    )
}