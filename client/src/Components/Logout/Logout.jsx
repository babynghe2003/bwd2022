import React from "react";
import auth from '../../auth/auth-helper'
import { Redirect } from 'react-router-dom';
import { Button } from "@material-ui/core";

const Logout = () => {
  return (
    auth.isAuthenticated() && ( 
      <Button color="inherit" onClick={() => history.push('/')}>
        Log Out
      </Button>
    )
  );
};

export default Logout;
