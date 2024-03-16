async function fetchPokemon() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    data = await data.json()
    console.log(data)
    // Destructuring
    // destructuring {key} = object
    const { abilities } = data
    console.log(abilities)
    // destructuring [name] = array
    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car, truck, suv] = vehicles;
    // Rest...name
    const [a1, ...phanconlai] = abilities
    console.log(a1)
    console.log(...phanconlai)

    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;
    console.log(one)
    console.log(...rest)
    console.log(rest)

    //Spread
    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
      }
      
      const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
      }
      
      const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
      console.log(myUpdatedVehicle)
}

fetchPokemon()