import React from 'react';
import { Paper, TextField, Button} from '@material-ui/core';
import { useState } from 'react';

function Login() {
    const [account, setAccount] = useState({"username": "", "password": ""});
    const handleLogin = (e) =>{
        // login api
    }
    return (
        <Paper style={
            {
                width: "100%",
                paddingTop: "90px",
                paddingBottom: "20px",
            }
          }>
            <div style={{
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                "justifyContent": "center",
            }}>
            <TextField
                style={{ width: '75%' , maxWidth: '300px', marginBottom: '20px'}}
                required
                id="username"
                name="username"
                label="Username"                            
                autoComplete="username"
                onChange={(e) => setAccount({...account, "username": e.target.value})}
            />   
            <TextField
                required
                style={{ width: '75%' , maxWidth: '300px', marginBottom: '20px'}}
                id="password"
                name="password"
                label="Password"                            
                autoComplete="password"
                onChange={(e) => setAccount({...account, "password": e.target.value})}
            />    
            <Button
                onClick={handleLogin}
                style={{ width: '75%' , maxWidth: '100px'}}
                variant="contained" color="primary">
                Login
            </Button>     
            <span style={{"margin-top": "10px"}}>Dont have an account? <a href='/register'>Register</a></span>      
            </div>
        </Paper>
    );
}

export default Login;