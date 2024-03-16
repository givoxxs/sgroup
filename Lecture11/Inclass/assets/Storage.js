async function fetchPokemon() {
    let data = localStorage.getItem('pokemon') 
    try {
        if (data) data = JSON.parse(data)
        else {
            data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            data = await data.json()

            localStorage.setItem('pokemon', JSON.stringify(data))
            console.log(data)
        }
    } catch (error) {
        console.log('Catch', error)
    }
}

fetchPokemon()

// sessionStorage.setItem("lastname", "Smith");
// let hey = sessionStorage.getItem("lastname");
// console.log(hey)