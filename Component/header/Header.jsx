// import classes from "*.module.css";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import React from "react";
import classes from "./Header.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Header = (props) => {
  return (
    <div className={classes.ContainerStyle}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Brightness3Icon></Brightness3Icon>

          <Typography variant="h6" className={classes.TypographyStyles}>
            News
          </Typography>
          <Button color="inherit" className={classes.TypographyStyles}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
