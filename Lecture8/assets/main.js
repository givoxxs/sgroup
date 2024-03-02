// array + index
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[3])  // // Output: orange
console.log(numbers[0]); // Output: 1

// Join
let result = fruits.join(', ');
console.log(result); // Output: "apple, banana, orange"
let result2 = numbers.join(' + ');
console.log(result2)

console.log(typeof numbers)

// Object
let person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

console.log(person)
// Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person('Alice', 25);
console.log(person1)

// Math
let result3 = Math.max(10, 20, 30);
console.log(result3); // Output: 30

// Date
let currentDate = new Date();
console.log(currentDate.getFullYear()); // Output: current month

// For loop:  Vòng lặp for được sử dụng để lặp qua một tập hợp các phần tử trong một khoảng được xác định.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//For...in...: Vòng lặp for...in được sử dụng để lặp qua các thuộc tính của một đối tượng.
let person2 = { name: 'John', age: 30 };
for (let key in person2) {
    console.log(key + ': ' + person2[key]);
}

//For...of...: Vòng lặp for...of được sử dụng để lặp qua các phần tử của một đối tượng có thể lặp lại như mảng hoặc chuỗi.
for (let fruit of fruits) {
    console.log(fruit);
}

//Do while | while do: Do while và while do là hai dạng khác nhau của vòng lặp while, sử dụng để lặp qua một khối mã nếu điều kiện là true.
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//Array method:Các phương thức của mảng là các phương thức được sử dụng để thao tác và thay đổi mảng.
numbers.push(6); // Thêm phần tử vào cuối mảng
numbers.unshift(6) // Thêm phần tử vào đầu mảng 

// forEach: Phương thức forEach() được sử dụng để lặp qua từng phần tử của mảng và thực hiện một hàm cho mỗi phần tử.
numbers.forEach(function(number) {
    console.log(number + 'foreach');
});

//


