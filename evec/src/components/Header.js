import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
// import SearchIcon from '@material-ui/icons/Search'
// import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Icon from '@material-ui/core/Icon'
import Asset_1 from '../assets/Asset_1.svg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.gray, 0.25),
    },
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  icon: {
    height: '100%',
    width: theme.spacing.unit * 9,
  },
  button: {
    margin: theme.spacing.unit,
  },  
});

function Header(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Icon className={classes.icon}>
            <img src = {Asset_1}></img>
          </Icon>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <div>
              <p>Evec</p>
              {/* <p>{appbarSub}</p> */}
            </div>
          </Typography>
          <Button variant="outlined" className={classes.button}>Join</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
