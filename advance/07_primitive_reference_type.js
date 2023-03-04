// value type: Kiểu tham trị
// reference type: kiểu tham chiếu

// kiểu dữ liệu nguyên thủy
/**
 * string
 * number
 * boolean
 * bigInt
 * symbol
 * undefined
 * null
 */

/**
 *  tham trị hoạt động
 *  let a = 1; tạo ra biến a, cấp một ô nhớ, lưu 1 vào ô nhớ.
 *  let b = a; tạo ta biến b, một vúng nhớ khác cấp cho b, 
 *  sao chép giá trọ của a vào ô nhớ mới.
 *  biến a và biến b ở hai ô nhớ đọc lập
 *  sửa a = 2 thì sử giá trị trong ô nhớ a thành 2
 *  khi đó b = 1
 */

// let a = 1;
// let b = a;

// a = 2;

// console.log(b) // 1



// kiểu dữ kiệu tham chiếu
/**
 * Địa chỉ +
 * chỉ một Object
 * Object
 * Array
 * function
 */

/**
 * let a = { name: "Mercedes" } tạo ra biến a , cấp một ô nhớ lưu { name:"Mercedes" }
 * vào ô nhớ và trả về địa chỉ đã lưu gán cho biến a
 * const b = a tạo ra biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a
 * a.name = "BMW" sử giá trị key name trong ô nhớ thành BMW
 */


let a = {
    name: "Mercedes"
}

let b = a;
a.name = "BMW";

console.log(b);


//  Xác định vùng nhớ tạo ra
/**
 * có hai vùng nhớ tạo ra
 * Object mới luôn luôn có vùng nhớ mới tạo ra
 * biến     Giá trị     Địa chỉ     ô nhớ
 * a        #002        #001        name: "mercedes" lúc tạo ra chưa mất đi và vẫn lưu trong ram
 *                      #002        name "BMW", model: 2018
 */

let a = {
    name: "Mercedes",
}

a = {
    name: "BMW",
    model: "2023",
}


// Object chưa Obejct con , Array chứa Array con
/**
 * cứ có Obejct mới thì sẽ có vùng nhớ mới tạo ra
 * chỉ lưu địa chỉ trỏ vào vùng nhớ ô nhớ đó
 * không lưu giá trị
 */

const student = {
    name: "Nguyễn Khánh",
    profile: {
        firstName: "Nguyễn",
        lastName: "Khánh",
        introduction: "Boy",
    }
}

/**
 * Biến     giá trị     Địa chỉ     Ô nhớ
 * 
 *                      001         {firstName: "Nguyễn", lastName: "Khánh", introduction: "Boy"}
 * student  #002        002         {name:"Nguyễn Khánh", profile: #001}
 */



// đưa value type vào function

// tham trị
function sum (a,b) {
    a = 0;
    b = 0
    console.log(a , b)
}

const c = 1;
const d = 2;
sum(c,d); // 0 0

console.log(c , d) // 1 2


// tham chiếu

function func(obj) {
    obj.name = "Mercedes";
    console.log(obj);
}

const a = {
    name: "BMW"
}

func(a); // Mercedes

console.log(a); // Mercedes



// cách sử lý

function createCar(obj) {
    // obj = JSON.parse(JSON.stringify(obj)); // tạo vùng nhớ mới
    obj = {...obj}; // chỉ cấp 1 tạo ra vùng nhớ mới
    obj.name = "Mercedes";
    return obj;
}

const car = {
    name: "BMW"
}

const newCar = createCar(car);
console.log(newCar);


// So sánh hai Object

const a = {
    name: "BMW"
}

const y = {
    name: "BMW"
}

a = b

console.log(a === b); // true hai vùng nhớ như nhau
console.log(a === y); // false hai vùng nhớ khác nhau



const k = {
    name:"BMW",
}

a.name = "Mercedes";

console.log(a); // lưu dịa chỉ không phải giá trị