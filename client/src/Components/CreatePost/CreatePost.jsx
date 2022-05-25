// CreatePost
import React from "react";
import { Button, Dialog, Grid } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import SubmitPost from "../SubmitPost/SubmitPost";
import auth from '../../auth/auth-helper'
import AlertDialog from "../AuthenticationModal/AuthenticationModal";
import { useSubmitPostModalContext } from "../../contexts/SubmitPostModalContext";

function CreatePost() {
  const { showSubmitPostModal, setShowSubmitPostModal } = useSubmitPostModalContext();

  const handleClickOpen = () => {
    setShowSubmitPostModal(true);
  };

  const handleClose = () => {
    setShowSubmitPostModal(false);
  };

  return (
    <>
      {(auth.isAuthenticated() && (
        // variant and color aren't doing anything... wtf...
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          <BorderColorIcon />
          Create Post
        </Button>
      )) || <AlertDialog />}

      <Dialog open={showSubmitPostModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <DialogTitle id="form-dialog-title">Create Your own Post</DialogTitle>
            <DialogContent>
              <SubmitPost />
            </DialogContent>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default CreatePost;
