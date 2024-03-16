const arr_sub = [1, 2];

console.log(arr_sub); 

[arr_sub[0], ...rest] = [...rest, arr_sub[0]];

console.log(arr_sub);
var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 1000);
    }
);

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 2000);
    }
);

Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    });

const arr = [1, 2]

console.log(arr)

[arr[0], arr[1]] = [arr[1], arr[0]]

console.log(arr)




