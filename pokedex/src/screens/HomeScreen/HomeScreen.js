import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { Grid, Typography} from "@material-ui/core";
import Header from "../../components/Header/Header";
import { goToPokedexScreen } from "../../routes/Coordinator";
import { useStyles } from "./styled";
import Footer from "../../components/Footer/Footer";
import Box from "@material-ui/core/Box";

const HomeScreen = () => {
  const classes = useStyles();

  const { states, setters } = useContext(GlobalStateContext);

  const addPokeToPokedex = (newItem) => {
    const index = states.pokemonList.findIndex((i) => i.name === newItem.name);

    let newPokedex = [...states.pokedex];
    newPokedex.push({ ...newItem });
    setters.setPokedex(newPokedex);

    let newPokeList = [...states.pokemonList];
    newPokeList.splice(index, 1);
    setters.setPokemonList(newPokeList);

    alert(`${newItem.name} was added to your pokedex!`);
  };

  return (
    <div>
      <Header textButton={"Pokedex"} buttonFunction={goToPokedexScreen} />
      <div className={classes.homeScreen}>
        <Box mt={20}>
          <Typography variant="h3"> List of Pokemons</Typography>
        </Box>
        <Grid container spacing={1} className={classes.homeGridContainer}>
          {states.pokemonList &&
            states.pokemonList.map((pokemon) => {
              return (
                <PokemonCard
                  buttonCardFunction={() => addPokeToPokedex(pokemon)}
                  url={pokemon.url}
                  buttonName={"Add Pokedex"}
                />
              );
            })}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
