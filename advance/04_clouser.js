// closure

// là một hàm có thể ghi nhơ ở nơi phạm vi nó tạo
// và truy cập biến bên ngoài phạm vi của nó

// ứng dụng
// viết code ngắn gọn hơn
// biêu diễn ứng dụng tính private trong OOP

// lưu ý
// biến được tham chiếu tròn closure sẽ không được xóa
// khỏi bộ nhớ khi hàm cha thực thi xong




function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }

    return increase;
}


const counter1 = createCounter();

console.log(counter1())
console.log(counter1())
console.log(counter1())