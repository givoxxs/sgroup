// var json = '["JavaScript","PHP"]'

// Stringify: Từ JavaScript types -> JSON
// Parse: Từ JSON -> JavaScript types

let json = '{"name":"Van Toan", "age":19}'
console.log(typeof json)
console.log(json)
let a = '1'
console.log(JSON.parse(json))
console.log(typeof JSON.parse(json))

console.log(JSON.stringify(null))


// PROMISE
// 1. Pending
// 2. Fullfill
// 3. Rejected

var promise = new Promise(
    // Executer
    function(resolve, reject) {
        // function
        // Successed: resolve()
        // Failed: reject()

        // Fake call API
        // resolve([
        //     {
        //         id: 1,
        //         name: 'JavaScript'
        //     }
        // ])

        reject('Error!')
    }
)

promise
    .then(function(course) {
        // sucess
        console.log(course)
    })
    .catch(function(error) {
        // fail
        console.log(error)
    })
    .finally(function() {
        // complete
        console.log("Done!")
    })