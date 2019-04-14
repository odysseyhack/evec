import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, CardActions, Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
  progressBar: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    justifyContent: 'center'
  }
};


class ScanHome extends React.Component {
  state = {
    completed: 0,
    phase: 0,
  };

  handleQrscan = () => {
    const { phase } = this.state;
    this.setState({ phase: phase+1 });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} justify = "center" >
        <Card className={classes.card}>
          <CardContent className={classes.title}>
            <Typography variant="h5" component="h2" >
            Please Scan the Form
            </Typography>
          </CardContent>
          <CardActions className={classes.progressBar}>
            <Button variant="outlined" color="primary" href="/qrscan">SCAN</Button>
          </CardActions>        
        </Card>        
      </Grid>
    );
  }
}

ScanHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanHome);
