import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
const Form = () => {
    const event=() =>{
        alert("Data added")
    }
  return (
    <div>
        <br /><br /><br />
        <Paper elevation={3} sx={{width: 450, height: 500, borderRadius: 2}}>
            <br />
            <div className='head'>
                <h2>BLOG FORM</h2>
            </div>
            <br /><br />
            <div className='content'>
                <TextField variant='standard' label="Blog_Name"></TextField>
                <br /><br />
                <TextField variant='standard' label="Description"></TextField>
                <br /><br />
                <TextField variant='standard' label="Author_Name"></TextField>
                <br /><br /><br />
                <Link to="/dashboard">
                    <Button variant='contained' onClick={event} sx={{backgroundColor: '#2f2f2f', width: '200px', '&:hover':{backgroundColor: 'white', color: '#222222'}}}>Upload</Button>
                </Link>
            </div>
        </Paper>
    </div>
  )
}

export default Form