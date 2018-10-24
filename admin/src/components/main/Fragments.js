import React, { Component } from 'react';
import Tabs from './common/Tabs';
import RichTexts from './fragments/RichTexts';
import Texts from './fragments/Texts';
import Menus from './fragments/Menus';
import All from './fragments/All';
import styles from './common/btn_styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddDialog from './common/AddDialog';


class UnstyledFragments extends Component {
  state = {
    add_dialog_open: false
  }

  addDialog() {
      this.setState({
          add_dialog_open: true
      });
  }

  closeDialog = selected => {
      this.setState({
          add_dialog_open: false
      });
  }

  render() {
    const { classes } = this.props;

    return (<div>
      <h1>Fragments</h1>
      <Tabs titles={ ['Texts', 'Rich Texts', 'Menus', 'All'] }>
        <Texts />
        <RichTexts />
        <Menus />
        <All />
      </Tabs>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={ classes.button }
        onClick={ this.addDialog.bind(this) }
      >
          <AddIcon />
      </Button>

      {
          this.state.add_dialog_open
              ? <AddDialog
                  onClose={ this.closeDialog.bind(this) }
                  onCancel={ this.closeDialog.bind(this) }
                  title='Rich Text Editor'
                  text='Fill out the text'
                  add_btn_text='Add Text'
                >
                  <p> Just a sample content </p>
                </AddDialog>
              : null
      }
    </div>);
  }
};

const Fragments = withStyles(styles)(UnstyledFragments);

export { Fragments };
