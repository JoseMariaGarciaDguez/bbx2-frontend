import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";




export default function ItemDetailsDialog(props) {
  console.log(props.item)

  const handleClose = () => {
    props.setOpenState(false);
  };

  const handleDialogClick = e => {
    e.stopPropagation();
  };

  return (
    <>

      <Dialog
        disableBackdropClick
        open={props.openState}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"md"}
        onClick={handleDialogClick}
      >
        
        <DialogTitle id="form-dialog-title">Item Edit:</DialogTitle>
        <DialogContent>
      
        <TextField
          id="itemCode"
          label="Item Code"
          defaultValue={props.item.itemCode}
          helperText="It has to be unique for each item"
        />
        <TextField
          id="description"
          label="Description"
          defaultValue={props.item.description}
          helperText="It has to be unique for each item"
        />
        <TextField
          id="price"
          label={props.item.price}
          defaultValue={props.item.description}
          helperText="It has to be unique for each item"
        />



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
        onClick={handleClose}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
