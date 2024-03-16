// const wait = setTimeout(function(){
//     console.log("Hello")
// }, 3000)

// let a=0

// const loop = setInterval(function(){
//     console.log(++a)
// }, 1000)

// function stop() {
//     clearInterval(loop)
//     clearTimeout(wait)
// }

setTimeout(function() {
    console.log("first_0")
}, 0)
console.log("second")

function stop() {

}

let loading = true

let promise = new Promise(
    function(resolve, reject) {
        setTimeout(function() {
            resolve("hello")
        }, 1000)
    }
)

promise.then(function(val) {
    console.log(val)
    let article = document.getElementById("article")
    article.innerText("hello")
}).catch(function(err) {

})

loading = false


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

      const data = fetch('https://jsonplaceholder.typicode.com/todos/')
      data.then(function(res) {
          console.log(res)
          return res.json()
      }).then(function(res) {
          console.log(res)
          let container = document.getElementById("container")
          const childs = res.map(function(item) {
              return `
              <div class="article">
                  <h1>${item.title}</h1>
                  <p>${item.id}</p>
              </div>
              `
          });
          console.log(container)
          container.innerHTML = childs.join("")
      }).catch(function(err){
        console.log("loi", err)
      }).catch(function(){
        console.log("finally")
      })


