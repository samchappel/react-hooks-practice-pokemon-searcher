import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemons, setPokemons ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(pokemonData => setPokemons(pokemonData))
  }, [])

  const filteredPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearchTerm={setSearchTerm} updateSearch={setSearchTerm}/>
      <br />
      <PokemonCollection pokemons={pokemons} searchTerm={searchTerm} filteredPokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
