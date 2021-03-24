import React, {useContext} from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import {Title } from './styled'
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import {Grid, Card, CircularProgress} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  homeContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  }
})
const HomeScreen = () => {

  const classes = useStyles()

  const { states, setters } = useContext(GlobalStateContext)

  const addPokeToPokedex = (newItem) => {
    // acha o index do item que é para adicionar
    const index = states.pokemonList.findIndex((i) => i.name === newItem.name)
    
    // copia a pokedex com o que tá
    let newPokedex = [...states.pokedex]
    // adiciona o item na pokedex
    newPokedex.push({ ...newItem })
    // seta a pokedex com o novo item
    setters.setPokedex(newPokedex)

    console.log(newPokedex)

    // copia a pokemonList com o que tá
    let newPokeList = [...states.pokemonList]
    // apaga o item com base no seu index
    newPokeList.splice(index, 1)
    // seta a pokemonList sem esse item
    setters.setPokemonList(newPokeList)
    
    alert(`${newItem.name} foi adicionado na pokedex!`)
  }

  return (
    <div>
      <Title>Lista de Pokemons</Title>
      <Grid container spacing={1} className={classes.homeContainer}>
        {states.pokemonList && states.pokemonList.map((pokemon) => {
          return <PokemonCard addPokeToPokedex={() => addPokeToPokedex(pokemon)} url={pokemon.url} />
        })}
      </Grid>
    </div>
    
  );
}

export default HomeScreen;