// this: trỏ về đối tượng àm nó đang thuộc về

// trong một phương thức , this tham chiếu tới một đối tượng truy cập
// phương thức (đối tượng trước dấu .)
// đứng ngoài thì this trỏ tới đối tượng global

// this trong hàm đại diện cho đối tượng sẽ được tạo
// this trong hàm undefined khi ở strict mode
// các phương thức bind call apply có thể tham chiếu thí tới đối tượng khác

const iPhone7 = {

    // thuộc tính - property
    name: "iPhone7",
    color: "Red",
    weight: 300,

    // phương thức - method
    takePhoto: function() {
        console.log(this);
    },
    
    objChild: {
        name: "Object child",
        methodChild: function() {
            console.log(this);
        }
    }
}

console.log(iPhone7.takePhoto());


// constructor function là dại diện cho đối tượng được tạo
function car(name, color, weight ) {
    this.name = name;
    this.color = color;
    this.weight = weight;

    this.run = function() {
        console.log("this", this)
    }
}

const mercedes = new car("name", "weight", "color");
console.log(mercedes.run());


// DOM - trả về element mà thuộc về
const button = document.querySelector("button");

button.onclick = function() {
    console.log(this);
}


// this global -> window


function Car(name, color) {
    this.name = name;
    this.color = color;
}

Car.prototype.run = function() {
    const test1 = function() {
        console.log(this); // có Context nên this là window
    }
    test1();

    const test2 = function() {
        console.log(this) // không có context nên this là Car
    }
    test2()
}


// arow function -> không có this





