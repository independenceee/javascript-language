// closure

// là một hàm có thể ghi nhơ ở nơi phạm vi nó tạo
// và truy cập biến bên ngoài phạm vi của nó

// ứng dụng
// viết code ngắn gọn hơn
// biêu diễn ứng dụng tính private trong OOP

// lưu ý
// biến được tham chiếu tròn closure sẽ không 
// được xóa
// khỏi bộ nhớ khi hàm cha thực thi xong




function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }

    return increase;
}


const counter1 = createCounter();

console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3



// Viết code ngắn hơn

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }
    return logger;
}


// Home.js

const infoLogger  = createLogger("Info");
infoLogger("Bắt đầu gưi mail");


// localstorage -> OOPS

function createStorage(key) {
    const store = JSON.parse(localStorage.get(key)) ?? {};


    const save = function() {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },


        set(key, value) {
            store[key] =value
        },

        remove(key) {
            delete store[key];
            save()
        }
    }

    return storage;
}



const profileSettings = createStorage("nguyễn khánh");
profileSettings.get();
profileSettings.set();
profileSettings("firstName", "Nguyễn Khánh")


// OOPS

function createApp() {

    const cars = [];


    return {
        add(car) {
            cars.push(car);
        },

        show() {
            console.log(cars);
        }
    }
}


const app = createApp()
app.add();
