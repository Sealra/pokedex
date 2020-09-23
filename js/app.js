//https://pokeapi.co/api/v2/pokemon/{id or name}/

$(function() {
  var currentPokemonId = 1;

  /* Escribe tu código aquí */
  function addName(pokeData) {
    $('.pokemonName').html(pokeData.name);
  };
  function addSprite(pokeData) {
    $('.pokemonImage').attr('src', pokeData.sprites.front_default);
  };

  function getPokemon() {
    $.getJSON(
      `https://pokeapi.co/api/v2/pokemon/${currentPokemonId}/`,
      function(data) {
      currentPokemonId = data.id;
      addName(data);
      addSprite(data);
    });
    }
  
  $('#buscar').click(function() {
    currentPokemonId = document.getElementById("namePk").value.toLowerCase();
    getPokemon();
  });
  
  $('#anterior').click(function () {
    currentPokemonId = currentPokemonId - 1;
    getPokemon();
  });
  
  $('#siguiente').click(function () {
    currentPokemonId = currentPokemonId + 1;
    getPokemon();
  });

  
  /* Hasta aquí :) */
});
