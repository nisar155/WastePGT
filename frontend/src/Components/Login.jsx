import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
const [inputs, setInputs] = useState({});
 const inputHandler = (e) => {
setInputs({ ...inputs, [e.target.name]: e.target.value }); console.log(inputs);
 };
 const addData = () => {
 console.log("Logging in with:", inputs); };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Welcome Back!
        </Typography>
        <Typography variant="body1" gutterBottom textAlign="center">
          Log in to manage your perfect waste plan.
        </Typography>

        <Box component="form" sx={{ width: '100%', mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            onChange={inputHandler}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={inputHandler}
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={addData}
            >
              Log In
            </Button>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Don't have an account? <Link to="/s" underline="hover">Sign up</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
