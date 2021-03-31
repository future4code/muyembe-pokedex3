import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { base_Url } from '../constants/urls'
import GlobalStateContext from './GlobalStateContext.js'

const GlobalState = (props) => {

  const [pokemonList, setPokemonList] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    axios
      .get(`${base_Url}?limit=27`)
      .then((response) => {
        console.log("response", response)
        setPokemonList(response.data.results)
      })
      .catch((error) => alert(error.message))
  }


  const states = { pokemonList, pokedex }
  const setters = { setPokemonList, setPokedex }
  const requests = { getPokemons }

  
  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState