import React from "react";
import { Typography } from "@material-ui/core";
import {Type} from './styled'


const Type_Colors = {
  bug: "#B1C12E",
  dark: "#4F3A2D",
  dragon: "#755EDF",
  electric: "#FCBC17",
  fairy: "#F4B1F4",
  fighting: "#823551D",
  fire: "#E73B0C",
  flying: "#A3B3F7",
  ghost: "#6060B2",
  grass: "#74C236",
  ground: "#D3B357",
  ice: "#A3E7FD",
  normal: "#C8C4BC",
  poison: "#934594",
  psychic: "#ED4882",
  rock: "#B9A156",
  steel: "#B5B5C3",
  water: "#3295F6",
};

function PokeType(props) {
  const type = props.type;
  const color = Type_Colors[type];

  return <Type color={color}><Typography variant='h6'> {props.type}  </Typography></Type>;
}

export default PokeType;
