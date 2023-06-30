// method bind(object, data1, data2, ...)

// P1

this.firstName = "Nguyễn";
this.lastName = "Khánh";

const teacher = {
    firstName: "Nguyễn",
    lastName: "Giang",

    getFullName:function(data1, data2) {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(teacher.getFullName()) // => Nguyễn Giang

const getName = teacher.getFullName // chưa gọi hàm => sao chép vùng nhớ
console.log(getName()) // => Nguyễn Khánh


const getName1 = teacher.getFullName.bind(teacher); // ràng buộc


const students = {
    firstName: "Bình",
    lastName: "An",
}


const getStudentName = teacher.getFullName.bind(students); // => Bình An vùng nhớ mới được tạo ra

// this -> window khi không có đấu chấm


// bind() 

// ràng buộc
// trả về một hàm mới
// có thể nhận các đối số như hàm ban đầu

// ràng buộc cho phương thức this cho một phương thức  (function)
// trả về một hàm mới với context được bind()
// hàm trả về được bind vẫn có thể nhận các đối số của hàm gốc
// ưu tiên gọi hàm bind hơn là truyền đối số



const boss = {
    firstName: "Nguyễn",
    lastName: "Khánh",

    getFullName: function() {
        console.log(this.firstName + " " + this.lastName); // button.firstName + " " + button.lastname -> bind()
    }
}

const button = document.querySelector("button")

button.onclick = teacher.getFullName.bind(this); // teacher



// P2

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = (()=> {
    const cars = [];

    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');

    return {

        add(car) {
            cars.push(car);
        }, 

        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map((car, index) => `
            <li>
                            ${car}
                <span class="delete" data-index="${index}">&time</span>
            </li>`).join('');
            root.innerHTML = html;

        },

        handleDelete: function(event) {
            // closet là phương thức kiểm tra chính element đó có chứa class hay không
            const deleteBtn = event.target.closet(".delete");
            if(deleteBtn) {
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },

        init() {

            // context: arow không bị sao cả cái khác thì trả về undefined

            const _this = this;

            submit.onClick = () => {
                const car = input.value;
                _this.add(car);
                _this.render();
                input.value = "";
                input.focus();
            }


            root.onClick = this.handleDelete.bind(this);

            this.render();
        }
    }
 
})()

app.init();


// bind(cái ràng buộc, đối số của hàm , đối số của hàm, ...)




