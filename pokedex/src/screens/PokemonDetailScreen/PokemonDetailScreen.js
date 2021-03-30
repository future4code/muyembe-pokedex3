import React from "react";
import { base_Url } from "../../constants/urls";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import HeaderDetails from "../../components/HeaderDetails/HeaderDetails";
import { Grid, Typography } from "@material-ui/core";
import PokeType from "../../components/PokeType/PokeType";
import { useStyles } from "./styled.js";
import PokeStats from "../../components/PokeStats/PokeStats";
import Footer from "../../components/Footer/Footer";

function PokemonDetailScreen() {
  const classes = useStyles();
  const params = useParams();

  const object = { name: params.name, url: `${base_Url}/${params.id}` };
  const pokeDetails = useRequestData(`${base_Url}/${params.id}`, undefined);

  return (
    <div className={classes.totalPage}>
      <HeaderDetails pokemon={object} />
      {pokeDetails ? (
        <div className={classes.detailsScreen}>
          <Typography variant="h3">{pokeDetails.name}</Typography>
          <Grid
            container
            spacing={1}
            className={classes.pokemonDetailContainer}
          >
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.card}>
                <div>
                  <img
                    className={classes.pokeImg}
                    src={pokeDetails.sprites.other.dream_world.front_default}
                    alt="pokemon"
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.card}>
                <Typography variant="h5">Statistics</Typography>
                {pokeDetails.stats.map((item) => {
                  return (
                    <PokeStats
                      statName={item.stat.name}
                      statScore={item.base_stat}
                    />
                  );
                })}
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.card}>
                <div>
                  <Typography variant="h5">Pokemon Type</Typography>
                  {pokeDetails.types.map((item) => {
                    return <PokeType type={item.type.name} />;
                  })}
                </div>
                <Typography variant="h5">Main Attacks</Typography>
                {pokeDetails.moves.map((item, index) => {
                  return index < 6 && <Typography variant = 'h6'>{item.move.name}</Typography>;
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default PokemonDetailScreen;
