import { Box, Button, Container, TextField, Typography, MenuItem, Grid, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addData = () => {
    console.log("Submitting:", inputs);
  };

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
        maxWidth="sm"
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
          Join Perfect Waste ♻️
        </Typography>
        <Typography variant="body1" gutterBottom textAlign="center">
          Sign up to schedule pickups, manage your waste, or help the environment.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              onChange={inputHandler}
              value={inputs.password || ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              onChange={inputHandler}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              inputProps={{
                maxLength: 10,
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
              onChange={(e) => {
                // Only allow numbers and max 10 digits
                const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                setInputs({ ...inputs, phoneNumber: value });
              }}
              value={inputs.phoneNumber || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Postal Code"
              name="postalCode"
              onChange={inputHandler}
            />
          </Grid>

         
          
          <Grid item xs={12}>
            {/* Box wrapper with justifyContent center and no fullWidth on Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="success"
                onClick={addData}
                sx={{ minWidth: 200 }}
              >
                Create Account
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Already have an account? <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Login</a>
        </Typography>
      </Container>
      <br /><br />
    </Box>
    
  );
};

export default Signup;
