import React , { useState } from 'react';
import axios from 'axios'
import { Button, Container, Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function AddAdvert() {
    
    const[advert_title, setTitle] = useState('')
    const[advert_desc, setDesc] = useState('')
    const[advertiser_id, setAdvertiserID] = useState('')

    const navigate = useNavigate()

    const handleButton = async (e) => {
        e.preventDefault();
        const advert = {advert_title, advert_desc, advertiser_id};
        await axios.post("http://localhost:8080/advert", advert);
        navigate("/");
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
                        <h2 className="text-center m-4" style={{color:"blue"}}>Add Advert</h2>
                            <Grid container direction="column" spacing={2}>
                                
                                <form onSubmit={(e) => handleButton(e)}>
                                    
                                    <TextField 
                                        id="outlined-basic" 
                                        label="advert Title" 
                                        variant="outlined" 
                                        fullWidth
                                        value={advert_title}
                                        onChange={(e)=>setTitle(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="advert Description"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                        value={advert_desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="advertiser id"
                                        fullWidth
                                        value={advertiser_id}
                                        onChange={(e)=>setAdvertiserID(e.target.value)}
                                    />

                                        
                                    <Button variant="contained" color="secondary" onClick={handleButton}>Submit</Button>
                                    <Button variant="outlined" color="error" href="/magazine-information-sys">Cancel</Button>
                                </form>

                            </Grid>
                    </Paper>
                </Grid>
        </Container>
    </div>
  );
}
