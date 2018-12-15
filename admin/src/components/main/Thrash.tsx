import React from 'react';
import ListTableThrash from './thrash/ListTableThrash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FragmentItem } from '../../types';
import * as R from 'ramda';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

const styles = theme => createStyles({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

interface Props extends WithStyles<typeof styles> {
  deleted_fragments: Array<FragmentItem>
}


interface Fragments {
  [id: string]: FragmentItem
}

interface FgState {
  fragments: Fragments,
}

const selectFragments: (state: FgState) => Fragments = state => state.fragments;

const getDeletedFragments = createSelector(
  [selectFragments], fragments => {
    return R.pipe(
      R.values(),
      R.filter(fg => fg.is_deleted)
    )(fragments)
  }
);

const ThrashList = (props: Props) => {

  return (
    <div>
      <h1>Thrash</h1>
      <ListTableThrash
        data={props.deleted_fragments}
        onDelete={console.log}
        onRestore={console.log}
      />

      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={props.classes.button} onClick={console.log}
      >
        <DeleteForeverIcon />
      </Button>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    deleted_fragments: getDeletedFragments(state),
  }
}

const Thrash = connect(mapStateToProps)(withStyles(styles)(ThrashList));


export { Thrash };