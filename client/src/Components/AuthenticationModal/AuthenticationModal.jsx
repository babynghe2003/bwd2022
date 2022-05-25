// AuthenticationModal
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// eslint-disable-next-line import/no-extraneous-dependencies
import auth from '../../auth/auth-helper'
import { Redirect } from "react-router-dom";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    Redirect('/signin')
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Open Forum</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">You Have not Logged in yet. Do you want to continue, Please login..</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLogin}
            color="primary"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            onClick={() => console.log("lack")}
          >
            Log in
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Go back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
