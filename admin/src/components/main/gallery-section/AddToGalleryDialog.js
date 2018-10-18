import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Gallery from '../photos/Gallery';


export default class AddToGalleryDialog extends React.Component {
  handleClose = () => {
      this.props.onClose(this.selected);
      this.selected = [];
  };

  // not state to avoid rerender.
  selected = [];

  handleCancel = () => {
      this.props.onCancel();
      this.selected = [];
  }

  handleSelect = selected => {
    this.selected = selected;
  }

  render() {
    return (
      <div>
        <Dialog
          open={ true }
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Image</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Click on the image to mark it to be added to gallery. Click it again to unmark it.
            </DialogContentText>
            <Gallery selectable={ true } onTileClick={ this.handleSelect }/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Images 
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
