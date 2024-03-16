## 1. Asysc & await

```
console.log("Fetch API with Async & Await");

async function fetchPokemon2() {
    let data;
    data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    data = await data.json();
    console.log(data);

    data = await fetch(data.species.url);
    data = await data.json();
    console.log(data);

    data = await fetch(data.evolution_chain.url);
    data = await data.json();
    console.log(data);

    data = await fetch(data.chain.species.url);
    data = await data.json();
    console.log(data);
};
fetchPokemon2();
```

## 2. Fetch API with Promise 


```
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
```

## 3. Try & catch

```
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
```

## 4. LocalStorage & SessionStorage
### Local Storage
- The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
- Example 
```
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
```
- NOTE: Name/value pairs are always stored as strings. Remember to convert them to another format when needed!
### Session Storage
The sessionStorage object is equal to the localStorage object, except that it stores the data for only one session. The data is deleted when the user closes the specific browser tab.
```
sessionStorage.setItem("lastname", "Smith");
let hey = sessionStorage.getItem("lastname");
```

## 5. Destructuring & Rest & Spread
### a. Destructuring

- destructuring [name] = array
 ```
    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car, truck, suv] = vehicles;
 ```
 - destructuring {key} = object
 ```
 async function fetchPokemon() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    data = await data.json()
    const { abilities } = data
    console.log(abilities)
}

fetchPokemon()
 ```
### b. Rest
- Rest...name
```
    const [a1, ...phanconlai] = abilities
    console.log(a1)
    console.log(...phanconlai)

    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;
    console.log(one)
    console.log(...rest)
    console.log(rest)


```
### c. Spread
```
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
```