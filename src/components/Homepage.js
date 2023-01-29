import React from 'react'
import Appbar from './Appbar'
import { Container, Grid, Button, Paper, Box } from "@mui/material";
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <Appbar />
        <br/> 
        
        <Container maxWidth="sm">
            <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                style={{ minHeight: "100vh" }}
            >
                <Paper elevation={4} sx={{ padding: 5 }}>
                    
                        <Grid container direction="column" spacing={2}>
                            
                            <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            
                            
                            <Button variant="contained" size="large" fullWidth href="/addStory">
                                Submit Story
                            </Button>
                            
                            
                            <Button variant="contained" size="large" fullWidth href="/addPhotograph">
                                Submit photograph
                            </Button>
                            
                            
                            <Button variant="contained" size="large" fullWidth href="/addAdvert">
                                Submit Advert
                            </Button>
                            

                            </Box>
                            
                        </Grid>
                </Paper>
            </Grid>
    </Container>
    
    </div>
    

  )
}

export default Homepage