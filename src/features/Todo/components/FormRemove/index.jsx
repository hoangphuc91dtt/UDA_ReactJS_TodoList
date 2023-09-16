import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

FormRemove.propTypes = {};

function FormRemove(props) {
  const { openRemove, handleCloseFormRemove, handleRemove } = props;
  return (
    <div>
      <Dialog
        open={openRemove}
        keepMounted
        onClose={handleCloseFormRemove}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFormRemove}>Disagree</Button>
          <Button onClick={handleRemove}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormRemove;
