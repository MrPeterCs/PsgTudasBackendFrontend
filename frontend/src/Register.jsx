import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register()
{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function register(e){
        e.preventDefault()
        setError("")

        try {
            const response = await fetch("http://localhost:3977/api/register",{
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({name, email, password})
            })

            const data = await response.json()

            if(response.ok){
                alert(data.message)
                navigate("/login")
            }else{
                setError(data.message)
            }
        } catch (error) {
            setError("Szerverhiba!")
        }
    }

    return (
        <form onSubmit={register}>
            <h2>Regisztráció</h2>

            <input type="text" placeholder="Név" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

            {error && <p style={{color: "red"}}>{error}</p>}
            
            <button type="submit">Regisztráció</button>
        </form>
    )
}