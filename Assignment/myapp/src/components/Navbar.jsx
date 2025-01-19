import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <AppBar sx={{backgroundColor: '#222222'}}>
            <Toolbar className="nav">
                <div className='lside'>
                    <Link to="/dashboard">
                        <Button>
                            <img src='https://files.oaiusercontent.com/file-PGybDzCBWbAmfYsLdprWRt?se=2025-01-18T12%3A22%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da3186e58-373b-47c8-8b11-dc9a7df9da42.webp&sig=MqzWQPcU15wGH3%2B/L%2BEAifcqk77dAwrLx64hNzaZ9wY%3D' width="50px"></img>
                        </Button>
                    </Link>
                </div>

                <div>
                    <h3>#FORESIGHT_BLOG</h3>
                </div>

                <div className='rside'>
                    <Link to="/form">
                        <Button variant='contained' sx={{backgroundColor: '#222222', '&:hover':{backgroundColor: 'white', color: '#222222', transform: 'scale(1.1)'}}}>Blog Form</Button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to="/dashboard">
                        <Button variant='contained' sx={{backgroundColor: '#222222', '&:hover':{backgroundColor: 'white', color: '#222222', transform: 'scale(1.1)'}}}>Dashboard</Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar