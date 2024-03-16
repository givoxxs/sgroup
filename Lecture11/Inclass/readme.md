1. Asysc & await

Code

console.log("Fetch API with Async & Await")

async function fetchPokemon2() {
    let data;
    data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    data = await data.json()
    console.log(data)

    data = await fetch(data.species.url)
    data = await data.json()
    console.log(data)

    data = await fetch(data.evolution_chain.url)
    data = await data.json()
    console.log(data)

    data = await fetch(data.chain.species.url)
    data = await data.json()
    console.log(data)
}
fetchPokemon2()

2. Fetch API with Promise 

function fetchPokemon1() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return fetch(data.species.url);
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return fetch(data.evolution_chain.url);
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return fetch(data.chain.species.url);
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log('Error:', error));
  }
  
  fetchPokemon1();

3. 