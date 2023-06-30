var course = [
    "Javascript",
    "Typescript",
]
course.length = 10;
console.log(course);

// không nên sử dụng

// for(var index =0; index< course.length; index++) {
//     console.log(course[index]);
// }

// nên sử dụng

for(var index in course) {
    console.log(course[index]);
}

var courses = new Array(10);
