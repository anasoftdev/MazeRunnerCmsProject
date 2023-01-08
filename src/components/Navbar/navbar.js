import { Link } from 'gatsby'
import React, {useState, useEffect} from 'react'



const Navbar = () => {
    return (
        <div style={{
    
            paddingTop: '10px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar