var promise = new Promise(
    // executer
    function(resolve, reject) {
        // resolve  => Thanh cong
        // reject   => That bai
    }
)

promise
    .then(function() {
        // resolve
    })
    .catch(function() {{
        // reject
    }})
    .finally(function() {
        // resolve rejected 
    })