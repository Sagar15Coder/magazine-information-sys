import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Container, Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditAdvert() {
    const[advert_title, setTitle] = useState('')
    const[advert_desc, setDesc] = useState('')
    const[advertiser_id, setAdvertiserID] = useState('')

    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(() => {
        loadAdvert();
    }, []);

    const handleButton = async (e) => {
        e.preventDefault();
        const advert = {advert_title, advert_desc, advertiser_id};
        
        await axios.put(`http://localhost:8080/advert/${id}`, advert);
        navigate("/adverts");
    };

    const loadAdvert = async () => {
        const result = await axios.get(`http://localhost:8080/advert/${id}`);

        setTitle(result.data.advert_title);
        setDesc(result.data.advert_desc);
        setAdvertiserID(result.data.advertiser_id);
    }
  return (
    <div>
        <Container maxWidth="sm">
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Paper elevation={2} sx={{ padding: 5 }}>
                        <h2 className="text-center m-4" style={{color:"blue"}}>Edit Advert</h2>
                            <Grid container direction="column" spacing={2}>
                                
                                <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Advert Title" 
                                        variant="outlined" 
                                        fullWidth
                                        value={advert_title}
                                        onChange={(e)=>setTitle(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Advert Description"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                        value={advert_desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Advertiser ID"
                                        fullWidth
                                        value={advertiser_id}
                                        onChange={(e)=>setAdvertiserID(e.target.value)}
                                    />

                                        
                                    <Button variant="contained" color="secondary" onClick={handleButton}>Submit</Button>
                                    <Button variant="outlined" color="error" href="/adverts">Cancel</Button>
                                </Box>
                                
                                
                            </Grid>
                    </Paper>
                </Grid>
        </Container>
    </div>
  );
}
