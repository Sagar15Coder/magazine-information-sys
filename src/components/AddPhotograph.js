import * as React from 'react';
import { Button, Container, Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AddPhotograph() {
    const[story_title, setTitle] = React.useState('')
    const[story_desc, setDesc] = React.useState('')

    const handleButton = (e) => {
        e.preventDefault()
        const story = {story_title, story_desc}
        console.log(story)
        fetch("http://localhost:8080/story/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(story)
        }).then(()=>{
            console.log("New story has been added")
        })
    }
  return (
    <Container maxWidth="sm">
            <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                style={{ minHeight: "100vh" }}
            >
                <Paper elevation={2} sx={{ padding: 5 }}>
                    <h2 style={{color:"blue"}}>Submit Photograph</h2>
                        <Grid container direction="column" spacing={2}>
                            
                            <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            
                                <TextField id="outlined-basic" label="Story Title" variant="outlined" fullWidth
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
                                <Button variant="contained" color="secondary" onClick={handleButton}>Submit</Button>
                                <Button variant="outlined" color="error" href="/">Cancel</Button>
                            </Box>
                            
                            
                        </Grid>
                </Paper>
            </Grid>
    </Container>
  );
}
