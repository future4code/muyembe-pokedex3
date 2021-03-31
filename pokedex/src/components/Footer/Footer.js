import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./styled";
import { Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © 2021 Monalisa
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
