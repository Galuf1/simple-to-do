// create a "close" button and append it to each list item

let myNodelist = document.getElementsByTagName("LI")
// console.log(myNodelist)
// let i

for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    console.log(span)
    span.appendChild(txt)
    myNodelist[i].appendChild(span)
}
// console.log(myNodelist)

// click on a close button to hide the current list item

let close = document.getElementsByClassName("close")
// let i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement
        div.style.display= "none"
    }
}

// add a checked symbol when clicking on a list item

const list = document.querySelector('ul')
console.log(list)
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false)

// create new list item when clicking on the add button

function newElement() {
    let li = document.createElement('li')
    let inputValue = document.getElementById("myInput").value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === '') {
        alert("You must write something")
    } else {
        document.getElementById("myUL").appendChild(li)
    }
    document.getElementById("myInput").vslue = ""

    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className= "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (i = 0; i < close.length; i++){
        close[i].onclick = function() {
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}