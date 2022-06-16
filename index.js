function addNewItem(evt){
    evt.preventDefault();
    let userInput = evt.target.elements[0]
    console.log(userInput, userInput.value, evt)
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(userInput.value))
    document.querySelector("#list-items").appendChild(node)
}

function strikeItem(evt){
    evt.preventDefault();
    let userInput = evt.target.elements[0]
    let ul = document.getElementById("list-items")
    let listItems = ul.getElementsByTagName('li')
    for(let i = 0; i < listItems.length; i++){
        let strItems = listItems[i].innerHTML
        if(strItems === userInput.value){
            let changedStr = listItems[i].style.textDecoration = "line-through"
            console.log()
        }
    }

}
