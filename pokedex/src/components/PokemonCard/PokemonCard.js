import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";
import { Grid, Button, Typography, CircularProgress } from "@material-ui/core";
import { useStyles } from "./styled";

function PokemonCard(props) {
  const history = useHistory();
  const classes = useStyles();

  const pokemon = useRequestData(props.url, undefined);

  const goToDetails = (id, name) => {
    history.push(`/detalhes/${id}/${name}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      {pokemon ? (
        <div className={classes.pokeCardContent}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            className={classes.pokemonImg}
            alt="Imagem do Pokemon"
          />
          <Typography variant="h5">{pokemon.name}</Typography>
          <div>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.button}
              onClick={() => goToDetails(pokemon.id, pokemon.name)}
            >
              {" "}
              Details{" "}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.button}
              onClick={props.buttonCardFunction}
            >
              {" "}
              {props.buttonName}
            </Button>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
}

export default PokemonCard;
