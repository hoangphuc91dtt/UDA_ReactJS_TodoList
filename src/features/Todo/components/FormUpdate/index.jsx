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

function FormUpdate(props) {
  const {
    openUpdate,
    handleCloseUpdate,
    handleUpdate,
    handleGetValueUpdate,
    valueCreateUpdate
  } = props;

  return (
    <Dialog
      open={openUpdate}
      onClose={handleCloseUpdate}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        "Use Google's location service?"
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={valueCreateUpdate}
            onChange={handleGetValueUpdate}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseUpdate}>Cancel</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormUpdate;
