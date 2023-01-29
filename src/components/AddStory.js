import React , { useState } from 'react';
import axios from 'axios'
import { Button, Container, Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function AddStory() {
    
    const[story_title, setTitle] = useState('')
    const[story_desc, setDesc] = useState('')
    const[story_content, setContent] = useState('')

    const navigate = useNavigate()

    const handleButton = async (e) => {
        e.preventDefault();
        const story = {story_title, story_desc, story_content};
        await axios.post("http://localhost:8080/story", story);
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
                        <h2 className="text-center m-4" style={{color:"blue"}}>Add Story</h2>
                            <Grid container direction="column" spacing={2}>
                                
                                <form onSubmit={(e) => handleButton(e)}>
                                    
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Story Title" 
                                        variant="outlined" fullWidth
                                        value={story_title}
                                        onChange={(e)=>setTitle(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Story Description"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                        value={story_desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Story Content"
                                        multiline
                                        rows={10}
                                        fullWidth
                                        value={story_content}
                                        onChange={(e)=>setContent(e.target.value)}
                                    />

                                        
                                    <Button variant="contained" color="secondary" onClick={handleButton}>Submit</Button>
                                    <Button variant="outlined" color="error" href="/">Cancel</Button>
                                </form>

                            </Grid>
                    </Paper>
                </Grid>
        </Container>
    </div>
  );
}
