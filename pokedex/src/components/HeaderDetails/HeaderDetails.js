import React, { useContext } from "react";
import logo from "../../assets/Pokemon_logo.svg";
import { useHistory } from "react-router-dom";
import { goToHomeScreen } from "../../routes/Coordinator";
import GlobalStateContext from "../../global/GlobalStateContext.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styled";

function HeaderDetails(props) {

  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  const classes = useStyles();

  const indexOfPokedex = states.pokedex.findIndex(
    (item) => item.name === props.pokemon.name
  );

  const whatToDo = (item) => {
    const indexList = states.pokemonList.findIndex((i) => i.name === item.name);
    const indexPokedex = states.pokedex.findIndex((i) => i.name === item.name);

    let newPokedex = [...states.pokedex];
    let newPokeList = [...states.pokemonList];

    if (indexPokedex === -1) {
      newPokedex.push({ ...item });
      newPokeList.splice(indexList, 1);
      alert(`${item.name} was added to your pokedex!`);
    } else {
      newPokedex.splice(indexPokedex, 1);
      newPokeList.push({ ...item });
      alert(`${item.name} was removed from your pokedex!`);
    }

    setters.setPokedex(newPokedex);
    setters.setPokemonList(newPokeList);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          variant="outlined"
          color="inherit"
          className={classes.button}
          onClick={() => history.goBack()}
        >
          {" "}
          Go Back{" "}
        </Button>
        <div className={classes.grow} />
        <img
          src={logo}
          className={classes.logo}
          onClick={() => goToHomeScreen(history)}
          alt="pokemon logo"
        />
        <div className={classes.grow} />
        <Button
          variant="outlined"
          color="inherit"
          className={classes.button}
          onClick={() => whatToDo(props.pokemon)}
        >
          {indexOfPokedex === -1 ? "Add to Pokedex" : "remove from pokedex"}{" "}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderDetails;
