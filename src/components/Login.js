import React, { useState } from 'react';
import { Container, Grid, InputAdornment, IconButton, Paper } from "@mui/material";
import { TextField, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false
  });
  const navigate = useNavigate();  
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
        .post("https://reqres.in/api/login", {
        username: values.username,
        password: values.password,
    })
    .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin-dashboard");
    })
    .catch(err => console.error(err));
        
  };

  const handlePasswordVisibility = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword
    })
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
                    <form onSubmit={handleFormSubmit}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <TextField 
                                    fullWidth 
                                    label="username" 
                                    placeholder="Enter username" 
                                    variant="outlined"
                                    required
                                    onChange={(e) => setValues({...values, username:e.target.value})} 
                                    />
                            </Grid>

                            <Grid item>
                                <TextField 
                                    type={values.showPassword ? "text" : "password"}
                                    fullWidth 
                                    label="password" 
                                    placeholder="Enter password" 
                                    variant="outlined"
                                    required
                                    onChange={(e) => setValues({...values, password:e.target.value})} 
                                    InputProps={{
                                        endAdornment:(
                                            <InputAdornment position="end">
                                                <IconButton 
                                                    onClick={handlePasswordVisibility}
                                                    aria-label="toggle password" 
                                                    edge="end"
                                                    >
                                                        {values.showPassword ? (
                                                            <VisibilityOffIcon />
                                                        ) : (
                                                            <VisibilityIcon />
                                                        )}
                                                        
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }} />
                            </Grid>

                            <Grid item>
                                <Button fullWidth type="submit" variant="contained">Login</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Container>
    </div>
  )
}

export default Login