let counter = document.getElementById('counter')

let timer = window.addEventListener("load", function(event) {
  setInterval(function() {counter.innerHTML++}, 1000)
})

document.getElementById("-").addEventListener("click", function(event) {
  // let counterNumber = parseInt(counter.innerText)
  counter.innerText = counterNumber - 1
})

document.getElementById("+").addEventListener("click", function(event) {
  // let counterNumber = parseInt(counter.innerText)
  counter.innerText = counterNumber + 1
})

document.getElementById("<3").addEventListener("click", function(event){
  let like = document.getElementById(counter.innerText)
  if (like !== null){
    let span = parseInt(like.firstElementChild.innerText) + 1
    like.innerHTML = `${counter.innerText} has been liked <span>${span}</span> times`
  } else {
    createLike()
  }
})

document.getElementById("pause").addEventListener("click", function(event){
  // debugger
  let pausedTime = counter.innerHTML
  if (event.target.innerText === "pause"){
    event.target.innerText = "resume"
    counter = pausedTime

  } else {
    event.target.innerText = "pause"
    timer = window.addEventListener("load", function(event) {
      setInterval(function() {counter.innerHTML++}, 1000)
    })
  }}
)

function createLike(){
  if (document.getElementById("pause").innerText === "pause"){
    let counterNumber = parseInt(counter.innerText)
    const li = document.createElement("li")
    const ul = document.getElementsByClassName("likes")
    let likeNumber = 1

    li.id = counterNumber
    li.innerHTML = `${counterNumber} has been liked <span>${likeNumber}</span> time`

    ul[0].appendChild(li)
  } else {
    alert("Resume to like!")
  }
}

const form = document.getElementById("comment-form")
const input = document.getElementById("user-input")

form.addEventListener("submit", function(event){
  event.preventDefault()

  if (document.getElementById("pause").innerText === "pause"){
    const p = document.createElement("p")
    const comments = document.getElementsByClassName("comments")

    p.className = "comment"
    p.innerHTML = input.value

    
    comments[0].appendChild(p)
  } else {
    alert("Resume to like!")
  }
})
