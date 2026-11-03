import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import GuestNavbar from './GuestNavbar'
import UserNavbar from './UserNavbar'
import ProductUpL from './ProductUpL';
import Products from './Products'

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  })

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
  }
  return (
    <BrowserRouter>
      {user ? <UserNavbar logout={logout} /> : <GuestNavbar />}
      <Routes>
        <Route path="/" element={<h1>Főoldal</h1>} />
        <Route path="/profile" element={ user ? <h1>Üdvözöllek, {user.name}</h1> : <Navigate to="/login" replace />}/>
        <Route path="/login" element={ user ? <Navigate to="/profile" replace /> : <Login setUserLogin={setUser} />}/>
        <Route path="/register" element={ user ? <Navigate to="/profile" replace /> : <Register />}/>
        <Route path="/Products" element={ user ? <Products/> :<Navigate to="/profile" replace /> } />
        <Route path="/ProductUpL" element={ user ? <ProductUpL />:<Navigate to="/profile" replace /> } />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
