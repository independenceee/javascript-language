// DOM events

/**
 * 1. preventDefault
 * - loại bỏ hành vi mặc định của thẻ html
 * - thẻ html có hành vi mặc định
 */

var aElement = document.anchors; // lấy ra thẻ a nếu dử dụng phải đặt name vào thẻ a
var bElement = document.document.querySelectorAll("a");
var cElement = document.links; // lấy ra tất cả thẻ a;


for(var i=0; i<cElement.length; i++) {
    cElement[i].onclick = function(event) {
        if(!e.target.href.startWith("http://localhost:3000")) {
            event.preventDefault();
        }
    }
}


var ulElement = document.querySelector("ul")
ulElement.onmousedown = function(e) {
    e.preventDefault();
}



/**
 * 2. stopPropagation
 * - loại bỏ sự kiện nổi bọt
 * <div>
 *      <button>
 *      </button>
 * </div>
 */




document.querySelector("div").onclick = function() {
    console.log("div");
}

document.querySelector("button").onclick = function(e) {
    e.stopPropagation();
    console.log("click me!")
}






