import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( { pokemons, filteredPokemon }) {

  const pokemonCards = filteredPokemon.map((pokemon) => (<PokemonCard key={pokemon.id} {...pokemon} />))
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
