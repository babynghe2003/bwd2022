import React from 'react';
import { Paper, TextField, Button} from '@material-ui/core';
import { useState } from 'react';

function Login() {
    const [account, setAccount] = useState({"username": "", "password": "", "repassword":""});
    const handleRegister = (e) =>{
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
            <TextField
                required
                style={{ width: '75%' , maxWidth: '300px', marginBottom: '20px'}}
                id="repassword"
                name="repassword"
                label="Repeat Password"                            
                autoComplete="password"
                onChange={(e) => setAccount({...account, "repassword": e.target.value})}
            />    
            <Button
                onClick={handleRegister}
                style={{ width: '75%' , maxWidth: '100px'}}
                variant="contained" color="primary">
                Register
            </Button>   
            <span style={{"margin-top": "10px"}}>Have an account? <a href='/login'>Login</a></span>        
            </div>
        </Paper>
    );
}

export default Login;