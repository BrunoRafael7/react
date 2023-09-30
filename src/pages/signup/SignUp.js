import { Avatar, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import LockIcon from '@mui/icons-material/Lock';
import { Component } from "react";

class SignUp extends Component{
  handleRegisterUser () {

  }
  render() {
    return (
      <Container component="main">
        <Box component="form" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar sx={{bgcolor: "primary.main"}}><LockIcon/></Avatar>
          <Typography variant="h5"> Sign Up</Typography>
          <Box component="form" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField required fullWidth name="firstName" label="First Name" id="firstName"/>
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth name="lastName" label="Last Name" id="lastName"/>
              </Grid>
            </Grid>
            <TextField sx={{mt: 2}} fullWidth name="email" label="Email" id="email"/>
            <TextField sx={{mt: 2}} fullWidth name="password" label="Password" id="password"/>
            <Button sx={{mt: 2}} fullWidth variant="contained"> Send </Button>
          </Box>
        </Box>
      </Container>
    )
  }
}

export default SignUp