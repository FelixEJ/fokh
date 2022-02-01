import React, { Component } from "react";
import styled from "styled-components";
import {
  Toolbar,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

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
    color: "#1787cb",
    fontSize: "1.5em",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#0074c1",
      borderBottom: "1px solid #0074c1",
    },
  },
  activeStyle: {
    backgroundColor: "red",
  }
}));

const AppBar = styled.div`
  position: static;
  background-color: #e6e6e6;
`;

const Nav = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1100px;
`;

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar>
      <CssBaseline />

      <Toolbar>
        <Nav>
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
        </Nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
