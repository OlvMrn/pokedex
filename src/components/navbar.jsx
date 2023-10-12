function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
  
  const handleClick = ((pokemonIndex, pokemonName) => {
    setPokemonIndex(pokemonIndex);
    if (pokemonName === "pikachu") {
      alert("pika pikachu !!!");
    }
  });

  return (
    <div>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button 
          key={pokemon.name}
          onClick={ () => handleClick(pokemonIndex, pokemon.name)}
        >{pokemon.name}</button>
      ))}
    </div>
  );
}

export default NavBar;