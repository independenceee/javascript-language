// call = bind + call

// call bind this trước sau đó gọi luôn hàm đó
// mượn hàm

// là phương thức gọi hàm của function constructor
// phương thức này dung để gọi hàm bà có thể bind this cho hàm


// gọi hàm với call method

function random () {
    console.log(Math.random())
}

random.call();

// gọi hàm và bind this
// lưu ý trương strict mode vẫn có this nếu được bind


const teacher = {
    firstName: "Nguyễn",
    lastName: "Giang"
}


const student = {
    firstName: "Nguyễn", 
    lastName: "Khánh",

    showFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

student.showFullName.call(student); // window -> Nguyễn Khánh
student.showFullName.call(teacher); // window -> mượn hàm -> Nguyễn Giang
student.showFullName(); // student


// strict mode

"use strict";

this.firstName = 'Nguyễn';
this.lastName = "Khánh";

function showFullName() {
    console.log(this.firstName + this.lastName);
}


showFullName() // error do this là undefined
showFullName.call(this); // Nguyễn Khánh


// thể hiện tính kế thừa trong lập trình hướng đối tượng



function Aminal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Aminal.call(this, name, weight);
    this.legs = legs;
}


const nguyenKhanh = new Chicken("Nguyễn Khánh", 66, 2);
console.log(nguyenKhanh);


// mượn hàm

function logger() {
    console.log(Array.prototype.forEach.call(arguments, function(items) {
        console.log(items)
    }));

    const newArrray = new Array.prototype.from(arguments);
    console.log(newArrray);
    const array = [...arguments];

    console.log(array);
}

logger(1,2,3,4,5);
