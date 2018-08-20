/*eslint-env browser*/
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/Mozilla-Firefox-4-free-Logo1.jpg") {
        myImage.setAttribute('src', "images/Mozilla-Firefox-4-free-Logo1-flipped.jpg");
    } else {
        myImage.setAttribute('src', "images/Mozilla-Firefox-4-free-Logo1.jpg");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername () {
    var myName = prompt("What's your name?");
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hey, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUsername ();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey, ' + storedName;
}