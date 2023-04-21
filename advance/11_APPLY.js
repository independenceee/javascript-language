// apply()
// cho phép gọi hàm với một bind this và truyền đối số 
// cho hàm gốc đưới dạng mảng

// truyền tương ứng vào đối số


const teacher = {
    firstName: "Nguyễn",
    lastName: "Giang"
}


function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName} ${message}`
}

let result = greet.apply(teacher, ["em chao co", " cô dạy môn gì thế ạ"]);
console.log(result);


result = greet.call(teacher, "em chao co", "co dạy môn gì thế ạ")
console.log(result)

// mượn hàm

const Teacher = {
    firstName: "Nguyễn",
    lastName: "Giang",
    isOnline: false,

    goOffLine() {
        this.isOnline = false,
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    },

    goOnLine() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`);
    }
}

const student = {
    firstName: "Nguyễn",
    lastName: "Khánh",
    isOnline: false,
}

Teacher.goOnLine.apply(student);
Teacher.goOnLine.call(student);


// kế thừa


function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Dog(speak) {
    // Animal.apply(this, [name, weight])
    Animal.apply(this, arguments);
    this.speak = function() {
        console.log("nhà có khách");
    }
}

const conVet = new Dog("Vet", 300);
console.log(conVet.speak());




// là phương thức kế thứa function prototype
// fn.call(), fn.bind, fn.apply


// bind

// trả về hàm mới với this tham chiếu tới thisArgs
// không thực hiện gọi hàm
// nếu đính kèm args thì đối số này được ưu tiên hơn
// const newFn = fn.bind(thisArgs, arg1, arg2, ...) => ưu tiên hơn
// newFn(arg1, arg2, ...) => không tác dụng



// call

// call bind this trước sau đó gọi luôn hàm đó
// mượn hàm
// là phương thức gọi hàm của function constructor
// phương thức này dung để gọi hàm bà có thể bind this cho hàm



// apply

// cho phép gọi hàm với một bind this và truyền đối số 
// cho hàm gốc đưới dạng mảng
