const sumAll = function(a, b) {
    //check for error
    if ( !(Number.isInteger(a))|| a < 0){
        return "ERROR"
    }
    if ( !(Number.isInteger(b)) || a < 0){
        return "ERROR"
    }

    sum = 0;
    if (b < a){
        for (i = b; i<= a; i++){
            sum = sum + i;
        }
    } else {
        for (i = a; i<= b; i++){
            sum = sum + i;
        }
    }

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
