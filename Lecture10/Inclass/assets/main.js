// Callback
function todo(work) {
    if (typeof work === 'function') {
        work()
    } else {
        console.log('this is type:', typeof work)
    }
}

todo(function () {
    console.log("hello")
})

// function findIndex(fn) {
//     //...
//     let result = fn(a[i])
// }

let arr = [1,2,3,4] 
const index = arr.findIndex(function(item) {

}) 
// Callback là truyền 1 hàm vào trong 1 hàm
const result = arr.find(function() {

})

document.addEventListener('click', function() {

})

// Array Prototype


let a = new Number(2) 
console.log(a === 2)
console.log(typeof(a))


console.log(Array)

Array.prototype.hello = function() {
    console.log('Hello van toan')
}

console.log(Array.prototype)

let b = [123]
b.hello()

String.prototype.chenIdVaoDau= function() {
    console.log('String prototype')
    return 'ID_'
}

let c = 'ab'
console.log(c.chenIdVaoDau())

// Object prototype

const obj = {

}
// Object Constructor
function Person(age, name) {
    this.age = age
    this.name = name
    
    this.say = function() {
        console.log('Hello ' + ' ', this)
    }

    this.child = {
        age2: 12,
        name2: "Who?",
        say : function() {
            console.log("hi ", this)
        }
    }
}

Person.prototype.language = "Tieng Viet"

const givo = new Person(19, 'Van Toan')

console.log(givo)
console.log(givo.language)
// console.log(givo.child.say())
let arr3 = [2, 8, 1]

const result3 = arr3.map(function (item) {
    return item*2;
}) 

console.log(result3)
// CODE LAI HAM MAP
Array.prototype.map2 = function(callback) {
    // let tmp = [] 
    console.log("hello", callback(3))
    for (let i = 0; i < this.length; i++) {
        let a = callback(this[i], i)
        console.log(a)
    }
}

function handle(item, index) {
    return item * 2
}

const result2 = arr3.map2(handle)

console.log("result2: ", result2)

