// console.log(document)
// let h1 = document.getElementsByTagName( 'h1')
// let container = document.getElementsByClassName('container')
// let h2 = document.getElementById('content' )
// let title = document.querySelector('.container2')
// let h2List = document.querySelectorA11('h2')
// console. log(h2List)
// h1[0].innerText = 'hihi'

// innerText (show content which we see in screen) & textContent (show full content)
// titile.innerText = 'hello '
// title.innerHTML = ' <p style="color: red">kinchana</p>'
// title.innerHTML = '<p style="color: red">kinchana</p>'

//document.getElementById(“mã_id_của_textbox”).value

console.log(document)

let inputValue = document.querySelector("#box1");
    
let inputValue2 = document.querySelector("#box2");

let result = document.querySelector('#ans')

let plus = document.querySelector('.plus')
let subtract = document.querySelector('.subtract')
let multi = document.querySelector('.multi')
let divide = document.querySelector('.divide')

plus.addEventListener("click", function() {
    let ans = parseFloat(inputValue.value) + parseFloat(inputValue2.value)   
    console.log(ans)
    result.value = ans
})

subtract.addEventListener("click", function() {
    let ans = parseFloat(inputValue.value) - parseFloat(inputValue2.value)   
    console.log(ans)
    result.value = ans
})

multi.addEventListener("click", function() {
    let ans = parseFloat(inputValue.value) * parseFloat(inputValue2.value)   
    console.log(ans)
    result.value = ans
})

divide.addEventListener("click", function() {
    if (parseFloat(inputValue2.value) == 0) {
        result.value = 'Vo nghiem'  
    } else {
        let ans = parseFloat(inputValue.value) * parseFloat(inputValue2.value)   
        console.log(ans)
        result.value = ans 
    }
})



