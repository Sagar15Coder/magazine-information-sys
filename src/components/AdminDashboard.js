//import { Typography } from '@mui/material'
import React from 'react'
import { Container, Grid, Button, Paper, Box } from "@mui/material";

const AdminDashboard = () => {
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
              <h2 className="text-center">Admin Dashboard</h2>
              <br/>
                <Paper elevation={4} sx={{ padding: 5 }}>
                    
                        <Grid container direction="column" spacing={2}>
                            
                            <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                            textAlign="center"
                            >
                            
                            
                            <Button variant="contained" size="large" fullWidth href="/stories">
                                Manage Stories
                            </Button>
                            
                            
                            <Button variant="contained" size="large" fullWidth href="/photographs">
                                Manage Photographs
                            </Button>
                            
                            
                            <Button variant="contained" size="large" fullWidth href="/adverts">
                                Manage Adverts
                            </Button>

                            <Button variant="contained" size="large" fullWidth href="/magazine-issues">
                                Manage Magazine Issues
                            </Button>
                            
                            <Button variant="outlined" color="error" href="/login">Log Out</Button>

                            </Box>
                            
                        </Grid>
                </Paper>
            </Grid>
            
    </Container>
    </div>
  )
}

export default AdminDashboard