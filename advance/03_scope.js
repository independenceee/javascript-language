// Scope - Phạm vi

/**
 * - Các loại phạm vi:
 *      + Global - Toàn cầu
 *      + Code block - Khối mã: let const
 *      + Local Scope - Hàm: var, function
 * 
 * - khi gọi mỗi hàm luôn có một phạm vi mới được tạo ra
 * - Các hàm có thể truy cập các biến được khai báo trong 
 * phạm vi của nó bà bên ngoài nó
 * - Cách thức của một biến được truy cập
 * - Khi náo một biến được xóa khỏi bộ nhớ
 *      + Biến toàn cầu
 *      + Biến trong codeblock và trong hàm
 *      + Biến trong hàm được tham chiếu bới một hàm
 */

// global => phạm vi toàn cầu

var message = "Học về Scope";
function logger() {
    console.log(message);
    log();
}
logger();

function log() {
    console.log("In ra log");
}

//! code block { ...code }
/**
 * const và let không truy cập được ra ngoài
 * if else for while do while 
 * 
 * var không thuộc phạm vi code block
 * 
 */

{
    const age = 18;
    console.log(age);
}


/**
phạm vi hàm không truy suất ra ngoài được
const let var function không thể truy cấp 
ngoài hàm thuộc phạm vi code block
 */

function logger() {
    var fullName = "Nguyễn Khánh";
    console.log(fullName);
}
logger();
// console.log(fullName); => Không chạy


//! khi gọi mỗi hàm luôn có một phạm vi mới được tạo ra

function logger() {

}
logger();
logger();
logger();

// có 3 phạm vi mới được tạo ra


