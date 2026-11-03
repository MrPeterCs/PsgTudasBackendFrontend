import { useState, useEffect } from "react"

export default function Product()
{
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    async function loadProducts(){
        try {
            const response = await fetch("http://localhost:3977/api/products")

            const data = await response.json()

            if(response.ok){
                setProducts(data)
            }else{
                setError(data.message)
            }
        } catch (error) {
            setError("Szerverhiba!")
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="text-center mt-4">
            <h2>Termékek</h2>

            {error && <p style={{color: "red"}}>{error}</p>}

            <table className="table table-bordered w-auto mx-auto" border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Név</th>
                        <th>Leírás</th>
                        <th>Ár</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}