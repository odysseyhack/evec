import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, CardActions, Card, CardContent } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import LinearBar from './LinearBar'

const styles = {
  grid: {
    marginTop: 10,
    alignItems: "center",
    direction: "column"
  },
  card: {
    minWidth: '50%',
    justifyContent: 'center'
  }, 
};


class ScanDone extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} justify = "center" >
        <Card className={classes.card}>
          <LinearBar />
          {/* <CardContent className={classes.title}>
            <Typography variant="h5" component="h2" >
            Successfully scanned the form
            </Typography>
          </CardContent>
          <CardActions className={classes.progressBar}>
            <Button variant="outlined" color="primary" onClick={this.handleQrscan}>SCAN</Button>
          </CardActions>         */}
        </Card>        
      </Grid>
    );
  }
}

ScanDone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanDone);
