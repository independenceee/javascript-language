// callback
// là hàm (function) được truyền qua đối số
// khi gọi hàm khác

// 1. là hàm
// 2. truyền qua đối số


function myFunction (param) {
    if(typeof param === 'function') {
        param(123);
    }
}


function myCallBack(value) {
    console.log("value: ", value)
}

myFunction(myCallBack)