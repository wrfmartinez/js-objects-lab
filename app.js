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
  },
  gymStatus: () => {
    const gymTally = {
      completed: 0,
      incomplete: 0
    }
    for (gym of game.gyms) {
      if (gym.completed === true) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    }
    console.log(gymTally);
  },
  partyCount: () => {
    let count = 0;
    for (partyPokemon of game.party) {
      count++;
    }
    return count;
  },
  collection: []
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

/* 
Copied catchPokemon method from above and modified it so that it also decreases the number of pokeballs every time you catch a pokemon

1. For this exercise, it's okay to have a negative number of pokeballs.
2. After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
3. Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
*/

// catchPokemon = (pokemonObj) => {
//   game.party.push(pokemonObj);
//   game.items[1].quantity -= 1;
// }

// catchPokemon(pokemons[55]);
// console.log(game.items[1].quantity);
// catchPokemon(pokemons[67]);
// console.log(game.items[1].quantity);
// catchPokemon(pokemons[27]);

for (gym of game.gyms) {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
}

// game.gymStatus();

for (gym of game.gyms) {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
}

catchPokemon = (pokemonObj) => {
  if (game.partyCount() > 5) {
    game.collection.push(pokemonObj);
  } else {
    game.party.push(pokemonObj);
  }
  game.items[1].quantity -= 1;
}

catchPokemon(pokemons[42]);
catchPokemon(pokemons[3]);

// Sorts the party of pokemons based on their hp levels from highest to lowest
game.party.sort((a, b) => b.hp - a.hp)

console.log(game.partyCount())
console.log(game.items);
console.log(game.collection);
// console.dir(pokemons, { maxArrayLength: null });