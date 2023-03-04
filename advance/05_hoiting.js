// Hoiting: Đưa khai báo lên đầu phạm vi

// 1. var function decoration
// var: Phần khai báo được đưa lên đầu, 
// phần gán không được đưa lên


var age;


console.log(age);
console.log(fullName);
age = 16;

// function decoration: Phần khai báo được đưa lên 
// đầu và phần phần gán không được đưa lên
// => được khởi tạo giá trị

console.log(sum(6,9));
function sum (a,b) {
    return a + b
}



// 2. let, const: Khai báo biến let và const khi được hoisted không 
// được khỏi tạo giá trị và được đựa và temporal dead zone => vùng 
// tạm thời không truy cập được
// => không khởi tạo giá trị

// let


{
    console.log(fullName);
    let fullName = "Nguyễn Duy Khánh";
}


// const 

const counter1 = makeCount();
console.log(counter1);


function makeCounter1() {
    let counter = 0;
    return increment;


    function increment() {
        return counter + 1;
    }
}


// => 1