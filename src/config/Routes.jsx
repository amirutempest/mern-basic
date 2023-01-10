import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Post from '../components/Post'
import Produk from '../components/Produk'
import Detail from '../pages/Detail/Detail'
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ProtectedRoute from '../routes/ProtectedRoute'

const Router = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to={'/'}>Home</Link> | <Link to={'/login'}>Login</Link> | <Link to={'/register'}>Register</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route 
                path='/:id' 
                element={
                <ProtectedRoute>
                    <Detail/>
                </ProtectedRoute>}>
                    <Route path='post' element={<Post/>}/>
                    <Route path='produk' element={<Produk/>} />
                </Route>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
