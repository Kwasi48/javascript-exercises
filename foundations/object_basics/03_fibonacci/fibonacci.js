const fibonacci = function(n) {

    if (n < 0){return "OOPS";}
    if (n == 0){return 0;}
    let arr = [1]
    a = 0;
    b = 1;
    for (i = 0; i <= n; i++){
        fib = a + b;
        a = b;
        b = fib;
        arr.push(fib);
    }
    return arr.at(n-1);
};

// Do not edit below this line
module.exports = fibonacci;
