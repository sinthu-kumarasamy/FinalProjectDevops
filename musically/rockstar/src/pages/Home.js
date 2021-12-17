import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: '100px',
    marginLeft: '200px'
  }
});

function Home(props) {
  const { classes } = props;

  return (
      <div className={styles.root}>
        <h1>Lyrically App</h1>
		</div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
