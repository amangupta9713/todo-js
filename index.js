function addToList(task) {
    let taskInput = document.getElementById('myInput').value; // input field value store in variable by the getElementById
    let taskLi = document.createElement('li'); // create a element li and stored a var
    let taskText = document.createTextNode(taskInput); // input field vale(text) store in var
    taskLi.appendChild(taskText);  // li element append input value text
    let removeButton = document.createElement('button'); // create a element button and stored a var
    removeButton.innerHTML = 'Remove'; // button element give the name
    removeButton.id = 'removeTask'; // button element define the ID
    removeButton.onclick = function(event) {  // remove list function
        // taskLi.remove(); // use 'closure' (remove here without call the function)
        removeFromList(event);
    }
    taskLi.appendChild(removeButton); // remove btn append with li
    let textList = document.getElementById('myList'); // my List(ul) define and store in var by the getElementById
    textList.appendChild(taskLi); // li appends in ul list
    document.getElementById("myInput").value = ""; // after add any text tha placeholder get clear.
    //input text value
    //find id of ul li
    // onclick add text value append in ul li
}

function removeFromList(event) { // Remove Function
    event.target.parentElement.remove()
    // this.remove click find ul li
    // than ul li remove

}

// create edit button
// append to the ul li
// click on edit button li text make a input field and fill same text
// same as edit button change to save button
// click on save button so save the input text value as same place

