const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

function dragStart() {
  this.classList.add("hold")
  setTimeout(() => {
    this.classList.add("invisible")
  }, 10)
}

function dragEnd() {
  console.log("end")
  this.classList.remove("hold")
  this.classList.add("fill")
}

function dragOver(e) {
  e.preventDefault()
  //odpala się kilkaset razy na sekundę kiedy element ciągnięty jest nad celem dropu
  console.log("over")
  //   this.classList.add("over")
}

function dragEnter() {
  console.log(this, "enter")
  this.classList.add("over")
}

function dragLeave() {
  console.log(this, "leave")
  this.classList.remove("over")
}

function dragDrop(e) {
  e.preventDefault()
  console.log("drop")
  this.className = "empty"
  e.target.classList.remove("over")
  e.target.append(fill)
  fill.classList.remove("invisible")
  this.innerText = "hello"
}

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

empties.forEach((empty) => {
  empty.addEventListener("dragover", (e) => dragOver(e))
  empty.addEventListener("dragenter", dragEnter)
  empty.addEventListener("dragleave", dragLeave)
  empty.addEventListener("drop", (e) => dragDrop(e))
})
