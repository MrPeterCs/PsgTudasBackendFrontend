import {Link, useNavigate} from "react-router-dom"

export default function UserNavbar({logout})
{
    const navigate = useNavigate()

    function handleLogout()
    {
        logout()
        navigate("/")
    }
    return(
    <>
    
        <button onClick={handleLogout}>Kijelentkezés</button>
    </>

        
    )
}