'use strict'

// 'use strict' báo lỗi ngăn chặn sử dụng những đoạn mã không an toàn
// hay dễ gây nhầm lẫn

// cách sử dụng
// thêm đầu file
// ngay sau thẻ mở script
// ngay đầu phạm vi hàm

// đặc trưng
// khai báo biến mà không sử dụng var, let, const

fullName1 = "Nguyễn Duy Khánh" // tạo ra biến full name

function fullName () {
     age = 18 // tạo ra biến age ở phạm vi global
}
fullName()

// console.log(age);
console.log(fullName())

// báo lỗi khi gán lại giá trị cho thuộc tính có writeable: false
// báo lỗi hạm khi có tham số trùng tên
// khai báo hàm trong code block thf hàm sẽ thược phạm vi code block
// không đặt tên biến tên hàm bằng một từ khóa nhạy cảm của ngôn ngữ

// công dụng 
// tránh quên từ khóa khai báo biến
// tránh trùn bên biến dẫn đến lỗi logic
// sử dụng bộ nhớ hiệu quả vì tránh tạo biến global


// sửa object
// writeable: true => sửa dược

const student =  { 
    fullName: "Nguyễn Duy Khánh"
}

student.fullName = "Khánh"
console.log(student);



// writeable: false => không sử được

const fullName = Object.freeze({
    fullName: "Nguyễn Duy Khánh"
}) // đóng băng

const name11 = {}
Object.defineProperties(name, "fullName", {
    value: "Nguyễn Duy Khánh"
})

console.log(name1); // đóng băng


// xóa object

const firstName = {
    value: "Nguyễn Duy Khánh",
}

delete firstName; // không xóa được object nhưng vẫn xóa được thuộc tính

{
    function sum(a,b) {
        return  a + b;
    }
}

sum(8,9);


