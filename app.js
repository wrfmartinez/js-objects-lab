const pokemons = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

game.difficulty = 'Easy';

for (const pokemon of pokemons) {
  if (pokemon.name === 'Squirtle') {
    game.party.push(pokemon)
  }
  if (pokemon.name === 'Pidgeotto') {
    game.party.push(pokemon);
  }
  if (pokemon.name === 'Growlithe') {
    game.party.push(pokemon);
  }
  if (pokemon.name === 'Exeggcute') {
    game.party.push(pokemon);
  }
}

game.party.sort((a, b) => b.hp - a.hp)

for (gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
}

for (partyPokemon of game.party) {
  if (partyPokemon.name === 'Squirtle') {
    const evolvedNumber = partyPokemon.number + 1;
    for (const pokemon of pokemons) {
      if (pokemon.number === evolvedNumber) {
        const partyPokemonIndex = game.party.indexOf(partyPokemon);
        game.party.splice(partyPokemonIndex, 1, pokemon);
      }
    }
  }
}

for (partyPokemon of game.party) {
  console.log(partyPokemon.name);
}

// console.log(game.party);
// console.dir(pokemons, { maxArrayLength: null });