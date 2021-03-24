import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen/PokemonDetailScrenn";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/pokedex">
          <PokedexScreen />
        </Route>
        <Route exact path="/detalhes/:id/:name">
          <PokemonDetailScreen />
        </Route>
        <Route>
            <div> Página não encontrada </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
