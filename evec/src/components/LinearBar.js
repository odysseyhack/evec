import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10,
    alignItems: 'center'
  },
};


class LinearBar extends React.Component {
  state = {
    completed: 0,
    doneText: "Information Uploading"
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({completed: 100});
      this.setState({doneText: "Information Collected"});
    } else {
      const diff = Math.random() * 10;
      this.setState({completed: Math.min(completed + diff, 100)});
    }
  };

  render() {
    const { classes } = this.props;
    const { doneText, completed } = this.state;
    return (
      <div className={classes.root}>
        <p>{doneText}</p>
        {/* <LinearProgress variant="determinate" value={this.state.completed} /> */}
        <CircularProgress
        className={classes.progress}
        variant="determinate"
        value={completed}
        color="secondary"
        />
      </div>
    );
  }
}

LinearBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearBar);
