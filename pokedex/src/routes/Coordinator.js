export const goToPokedexScreen = (history) => {
  history.push("/pokedex");
};

export const goToPokemonDetailScreen = (history) => {
  history.push("/:pokemonId");
};

export const goToHomeScreen = (history) => {
  history.push("/");
};
