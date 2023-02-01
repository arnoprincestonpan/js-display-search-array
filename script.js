/*
* Project   :   Display and Search Arrays with JavaScript
* Purpose   :   To recreate and change an assignment with more features.
*/

// Set up arrays to search items
let simpsonsArray = ["Bart", "Lisa", "Homer", "Marge", "Grampa", "Santa's Little Helper"]
let futuramaArray = ["Fry", "Leela", "Bender", "Amy", "Zoidberg", "Professor", "Hermes", "Nibbler"]
let familyGuyArray = ["Peter", "Stewie", "Louis", "Meg", "Glenn Quagmire", "Brian", "Joe Swanson", "Chris", "Cleveland Brown"]

// setup variables
const seriesSelect = document.getElementById("series-select")
const divCharDisplay = document.getElementById("character-display")
const searchField = document.getElementById("search-field")

seriesSelect.addEventListener('change', (event) => {
    let html = "<ul>"
    divCharDisplay.innerHTML = ""
    if (seriesSelect.value === "simpsons") {
        divCharDisplay.innerHTML = `<li>You chose Simpsons.</li>`
        for (let i = 0; i < simpsonsArray.length; i++) {
            if (searchField.value === simpsonsArray[i]) {
                console.log("Found")
                html += "<li><b>" + simpsonsArray[i] + "</b></li>"
            } else {
                html += "<li>" + simpsonsArray[i] + "</li>"
            }
        }
    }else if(seriesSelect.value === "familyguy"){
        divCharDisplay.innerHTML = `<li>You chose Family Guy.</li>`
        for (let i = 0; i < familyGuyArray.length; i++) {
            if (searchField.value === familyGuyArray[i]) {
                console.log("Found")
                html += "<li><b>" + familyGuyArray[i] + "</b></li>"
            } else {
                html += "<li>" + familyGuyArray[i] + "</li>"
            }
        }
    }else if(seriesSelect.value === "futurama"){
        divCharDisplay.innerHTML = `<li>You chose Futurama.</li>`
        for (let i = 0; i < futuramaArray.length; i++) {
            if (searchField.value === futuramaArray[i]) {
                console.log("Found")
                html += "<li><b>" + futuramaArray[i] + "</b></li>"
            } else {
                html += "<li>" + futuramaArray[i] + "</li>"
            }
        }
    }
    html += "</ul>"
    divCharDisplay.innerHTML += html
})
