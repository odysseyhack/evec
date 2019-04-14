import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const styles = {
  root: {
    flexGrow: 1,
  },
  grid: {
    marginTop: 10,
    alignItems: "center",
    direction: "column"
  },
  card: {
    minWidth: '50%',
    justifyContent: 'center',
    maxHeight: '80%'
  },    
};

class QrScanner extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
      this.props.history.push('/scan-done')
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container item xs={12} justify = "center" >
        <Card className={classes.card}>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </Card>
      </Grid>
    )
  }
}
QrScanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QrScanner);
