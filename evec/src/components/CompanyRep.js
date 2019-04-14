import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from './SearchBar'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#A2A2A2',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(ranking, company, reputation) {
  id += 1;
  return { id, ranking, company, reputation};
}

const rows = [
  createData('01', 'Company A', 234),
  createData('02', 'Company B', 211),
  createData('03', 'Company C', 190),
  createData('04', 'Company X', 168),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <SearchBar />
      <p>Company Reputation Ranking</p>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Ranking</CustomTableCell>
            <CustomTableCell align="right">Company</CustomTableCell>
            <CustomTableCell align="right">Reputation</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.ranking}
              </CustomTableCell>
              <CustomTableCell align="right">{row.company}</CustomTableCell>
              <CustomTableCell align="right">{row.reputation}</CustomTableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
