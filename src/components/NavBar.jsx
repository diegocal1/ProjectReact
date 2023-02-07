import React from 'react'
import CarWidget from './CarWidget'

const NavBar = () => {
  return (
    <div><h1>Macchiato Cakes</h1>
    <ul>
        <li>Carrot Cake</li>
        <li>Brownie de Chocolate</li>
        <li>Tiramisu</li>
        <li>Red Velvet</li>
        <li>Chocolate chips Cookies</li>
        <li>Cheesecake</li>
    </ul>
    <CarWidget/>
    </div>
  )
}

export default NavBar