import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ProductsUpL()
{
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function produpload(e){
        e.preventDefault()
        setError("")

        try {
            const response = await fetch("http://localhost:3977/api/productupl",{
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({name, description, price})
            })

            const data = await response.json()

            if(response.ok){
                alert(data.message)
                setName("")
                setDescription("")
                setPrice("")
            }else{
                setError(data.message)
            }
        } catch (error) {
            setError("Szerverhiba!")
        }
    }

    return (
        <form onSubmit={produpload}>
            <h2>Feltöltés</h2>

            <input type="text" placeholder="Termék neve" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="text" placeholder="Termék leírása" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            <input type="number" placeholder="Ára" value={price} onChange={(e) => setPrice(e.target.value)} required/>

            {error && <p style={{color: "red"}}>{error}</p>}
            
            <button type="submit">Feltöltés</button>
        </form>
    )
}