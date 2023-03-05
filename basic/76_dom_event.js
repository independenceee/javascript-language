// DOM Events

// 1. Attribute Events

// click: click
// blur:
// change: 
// copy:
// drag drop: kéo thả
// focus: tập trung con trỏ chuột
// keydown:
// keyup:
// resize:
// scroll:


// 2. Asign event using the elements node


const h1Element = document.querySelectorAll("h1");

h1Element.onclick = function(event) {

    console.log(event.target.value);
    console.log(Math.random());
}


