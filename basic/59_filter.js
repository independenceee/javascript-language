// filter() Lọc phần tử thỏa mãn điều kiện
// find() trả vef phần tử thỏa mãn đầu tiên tìm được

/**
 * Lọc phần tử thỏa mãn điều kiện
 * 
 */

const courses = [
    {
        name: "Javascript",
        coin: 1000,
    }, 
    {
        name: "Typescript",
        coin: 2000,
    }, 
    {
        name: "html",
        coin: 500,
    }
]


// const result = courses.filter(function(course, index, array) {
//     return course.coin > 0;
// })


Array.prototype.filter2 = function(callback) {
    var output = []
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }

    return output;
}

const result = courses.filter2(function(course, index, array) {
    return course.coin > 0;
})

console.log(result)
