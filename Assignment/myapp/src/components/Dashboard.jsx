import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
const Dashboard = () => {
    var [data,setdata] = useState([])

    const cardView = (id,title,body) =>{
        console.log(`${id} ${title} ${body}`);
        alert('ID:\t'+id+'\nTitle:\t' +title+'\nDescription:\t'+body)
    }

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        setdata(res.data)
    })
  return (
    <div className='grid'>
        <br /><br /><br />
        <Grid container spacing={2}>
            {data.map((val) => {
                return(
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ maxWidth: 345,'&:hover':{transform: 'scale(1.05)'}}} key={val.id}>
                                    <CardActionArea onClick={cardView.bind(this,val.id,val.title,val.body)}>
                                        <CardMedia
                                        component="img"
                                        height="140"
                                        image='https://files.oaiusercontent.com/file-8kFUBU88GgscFwbf2WLuxk?se=2025-01-18T15%3A30%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3ccfa365-fdcc-4893-9dec-403ad0c99300.webp&sig=STGyJdkUCWPMrXmPsKtlRCHw4/BYQ9DPfU9895UY4gc%3D'
                                        ></CardMedia>
                                        <CardContent sx={{backgroundColor: '#f9f9f9'}}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                ID: {val.id}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                Title: {val.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                )
                })}
        </Grid>
    </div>
  )
}

export default Dashboard
