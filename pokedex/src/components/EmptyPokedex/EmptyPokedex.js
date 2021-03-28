import React from "react";
import { Typography } from "@material-ui/core";
import snorlax from "../../assets/snorlax.png";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styled";

function EmptyPokedex() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">Hi! Your pokedex is empty</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={snorlax} alt="snorlax" className={classes.Img} />
      </Grid>
    </Grid>
  );
}

export default EmptyPokedex;
