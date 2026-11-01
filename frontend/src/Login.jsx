import { useState } from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Login({setUserLogin})
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function login(e){
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/login",{
               method:"POST",
               headers: { "Content-Type" : "application/json"},
               body: JSON.stringify({email, password}) 
            })

            const data = await response.json()

            if(response.ok){
                localStorage.setItem("token", data.token),
                localStorage.setItem("user", JSON.stringify(data.user))

                setUserLogin(data.user)
                navigate("/profile")
            }else{data.message}
        } catch (error) {
            alert("Szerverhiba!")
        }
    }
    return (
        <form onSubmit={login}>
            <h2>Bejelentkezés</h2>

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Bejelentkezés</button>
        </form>
    )
}