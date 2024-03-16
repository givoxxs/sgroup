async function fetchPokemon2() {
    try {
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
    } catch (error) {
        console.log('catch', error)
    }
}

fetchPokemon2()