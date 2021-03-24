import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import {Grid, Button} from '@material-ui/core'
import styled from 'styled-components'

const Img = styled.img`
    height: 200px;
    width: 200px;
`
function PokemonCard(props) {
    const history = useHistory()

    const pokemon = useRequestData(props.url, undefined)

    console.log("pokemon", pokemon)

    const goToDetails = (id, name) => {
        history.push(`/detalhes/${id}/${name}`)
    }


    return (
        <Grid item xs={12} sm={6} md={4} style={{textAlign: "center"}}>

            {pokemon && <div>
                <Img src = {pokemon.sprites.other.dream_world.front_default}  />
                    <h1>{pokemon.name}</h1>
                    <div>
                        <Button variant="outlined" color= "secondary"  onClick={() => goToDetails(pokemon.id, pokemon.name)}>detalhes</Button>
                        <Button variant="outlined" color= "secondary"  onClick={props.addPokeToPokedex} >add pokedex</Button>
                    </div>

            </div> }

        </Grid>
    );
}

export default PokemonCard