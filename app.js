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
  catchPokemon: (pokemonObj) => {
    game.party.push(pokemonObj);
  }
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

for (gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
}

// Checks the current party for a Squirtle since that is the starter pokemon that was chosen and evolves it
for (partyPokemon of game.party) {
  if (partyPokemon.name === 'Squirtle') {
    const evolvedNumber = partyPokemon.number + 1;
    // Loop through the 'pokemons' array
    for (const pokemon of pokemons) {
      if (pokemon.number === evolvedNumber) {
        const partyPokemonIndex = game.party.indexOf(partyPokemon);
        // Replaces pokemon with evolved version based on it's index position within the party array
        game.party.splice(partyPokemonIndex, 1, pokemon);
      }
    }
  }
}

// for (partyPokemon of game.party) {
//   console.log(partyPokemon.name);
// }

// for (const pokemon of pokemons) {
//   if (pokemon.starter === true) {
//     console.log(pokemon);
//   }
// }

game.catchPokemon(pokemons[51]);

// Sorts the party of pokemons based on their hp levels from highest to lowest
game.party.sort((a, b) => b.hp - a.hp)

console.log(game.party);
// console.dir(pokemons, { maxArrayLength: null });