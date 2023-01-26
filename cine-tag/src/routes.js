import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import PaginaBase from 'pages/PaginaBase'
import Player from 'pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path='favoritos' element={<Favoritos />} />
                    <Route path='player/:id' element={<Player />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
