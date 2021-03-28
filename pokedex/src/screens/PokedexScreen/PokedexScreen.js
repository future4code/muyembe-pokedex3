import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Grid, Typography } from "@material-ui/core";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import { goToHomeScreen } from "../../routes/Coordinator";
import Box from "@material-ui/core/Box";
import EmptyPokedex from "../../components/EmptyPokedex/EmptyPokedex";
import { useStyles } from "./styled";

function PokedexScreen() {
  const classes = useStyles();

  const { states, setters } = useContext(GlobalStateContext);

  const removePokeFromPokedex = (itemToRemove) => {
    const index = states.pokedex.findIndex(
      (item) => item.name === itemToRemove.name
    );

    let newPokedex = [...states.pokedex];
    newPokedex.splice(index, 1);
    setters.setPokedex(newPokedex);

    let newPokeList = [...states.pokemonList];
    newPokeList.push({ ...itemToRemove });
    setters.setPokemonList(newPokeList);

    alert(`${itemToRemove.name} foi removido da pokedex!`);
  };
  const pokedexList = states.pokedex.map((item) => {
    return (
      <PokemonCard
        buttonCardFunction={() => removePokeFromPokedex(item)}
        url={item.url}
        buttonName={" Deletar Pokemon"}
      />
    );
  });

  return (
    <div className={classes.pokedexContainer}>
      <Header textButton={"Home"} buttonFunction={goToHomeScreen} />
      <Box mt={20}>
        <Typography variant="h3"> Pokedex</Typography>
      </Box>
      <Grid container spacing={1}>
        {pokedexList.length > 0 ? pokedexList : <EmptyPokedex />}
      </Grid>
    </div>
  );
}

export default PokedexScreen;
