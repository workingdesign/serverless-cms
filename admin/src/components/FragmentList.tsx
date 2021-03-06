import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListTable from './main/common/ListTable';
import styles from './main/common/btn_styles';
import { FragmentItem } from '../types';

interface Props {
  fragments: FragmentItem[],
  removeFragment: (id: string) => any,
  addFragment: () => void,
  type_path: string,
  classes: { button: string }
};

class FragmentList extends Component<Props> {
  render() {
    const { classes, type_path } = this.props;

    return (
      <div>
        <ListTable data={this.props.fragments} onDelete={this.props.removeFragment} type_path={type_path} />
        <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={this.props.addFragment}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(FragmentList);
