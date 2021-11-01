import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/newsPage" className={classes.link}>
              News
            </Link>
            <Link to="/localcontextPage" className={classes.link}>
              Local Context
            </Link>
            <Link to="/joinUsPage" className={classes.link}>
              Join Us
            </Link>
            <Link to="/headwatersProposalPage" className={classes.link}>
              Headwaters Proposal
            </Link>
            <Link to="/galleryPage" className={classes.link}>
              Gallery
            </Link>
            <Link to="/videosPage" className={classes.link}>
              Videos
            </Link>
            <Link to="/contactPage" className={classes.link}>
              Contact
            </Link>
            <Link to="/donatePage" className={classes.link}>
              Donate
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
