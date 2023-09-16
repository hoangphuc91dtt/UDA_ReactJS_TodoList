import React from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";

function FormCreate(props) {
  const { handleClose, open, handleAddValue, handleGetValue } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add todo"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleGetValue}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddValue} autoFocus>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormCreate;
