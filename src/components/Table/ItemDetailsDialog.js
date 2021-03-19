import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from "react-redux";
import updateItemList from "../../store/item/action";



export default function ItemDetailsDialog(props) {
    
  const itemSelected = useSelector(state => state.itemReducer.detail);
  const [currentItem, setcurrentItem] = useState();

  const dispatch = useDispatch();
  const handleClose = () => {


    props.setOpenState(false);
  };

  const handleChanges = (entity) => {
    setcurrentItem({
      ...currentItem,
      [entity.id] : entity.value
    })
    dispatch(updateItemList(currentItem));
  }
  
  const handleDialogClick = e => {
    e.stopPropagation();
  };
  useEffect(() => {
    if(itemSelected)
    setcurrentItem(itemSelected)
  }, [itemSelected])
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
        onChange={(e)=> handleChanges(e.target)}
      >
        
        <DialogTitle id="form-dialog-title">Item Edit:</DialogTitle>
        <DialogContent >
        <TextField
          id="itemCode"
          label="Item Code"
          defaultValue={itemSelected.id}
          //onChange={(e)=> handleChanges(e.target)}
          helperText="It has to be unique for each item"
        />
        <TextField
          id="description"
          label="Description"
          defaultValue={itemSelected.description}
          //onChange={(e)=> handleChanges(e)}
          helperText=""
        />
        <TextField
          id="price"
          label="Price"
          defaultValue={itemSelected.price}
          //onChange={(e)=> handleChanges(e)}
          helperText=""
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
