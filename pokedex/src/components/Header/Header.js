import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import logoPokemon from "../../assets/Pokemon_logo.svg";
import { goToHomeScreen } from "../../routes/Coordinator";
import { useStyles } from "./styled";

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
        <Button disabled={true} className={classes.button}></Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
