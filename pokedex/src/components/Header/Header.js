import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import logoPokemon from "../../assets/Pokemon_logo.svg";
import { goToHomeScreen } from "../../routes/Coordinator";
import { useStyles } from "./styled";
import pokeball from "../../assets/pokeball.svg";
import Avatar from "@material-ui/core/Avatar";

function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button
          variant="outlined"
          color="inherit"
          className={classes.button}
          onClick={() => {
            props.buttonFunction(history);
          }}
          startIcon={<Avatar src={pokeball} />}
        >
          {" "}
          {props.textButton}{" "}
        </Button>
        <div className={classes.grow} />
        <img
          src={logoPokemon}
          alt="pokemon logo"
          className={classes.logo}
          onClick={() => goToHomeScreen(history)}
        />
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
