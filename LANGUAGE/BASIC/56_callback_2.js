// callback

/**
 * 1. là hàm
 * 2. được truyền qua đối số
 * 3. gọi lại trong hàm nhận đối số
 * 
 */


const courses = [
    "javascript",
    "php",
    "html",
];

// function myFunction(course) {
//     console.log(course);
// }
// courses.map(function(course) {
//     console.log(course)
// })

// const htmls = courses.map(function(course) {
//     return `<p>${course}</p>`;
// })

// console.log(htmls.join("\n"));

Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;
    for(var index =0; index < arrayLength; index++) {
        var result = callback(this[index], index);
        output.push(result);
    }

    return output;
}


const htmls = courses.map2(function(course) {
    return `<p>${course}</p>`;
});


console.log(htmls.join('\n'));
