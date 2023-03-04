// foreEach() - không trả về cái gì


/**
 * nhận hai đối số:
 * 1. callback function (element, index, array gốc)
 * 2. this Argument
 */

/**
 * for in => duyệt qua cả element prototype
 * - Object Prototypes
 * - For in
 */
var courses = [
    "javascript",
    "php",
    "Ruby"
];

Array.prototype.foreEach2 = function(callback) {
    for(var index in this) {
       if(this.hasOwnProperty(index)) {
        callback(this[index], index, this);
       }
    }
}

courses.foreEach2(function(course, index, array) {
    console.log(course, index, array);
})