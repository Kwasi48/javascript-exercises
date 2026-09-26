const repeatString = function(string, num) {
     string1 = "";
    if (num < 0){
        return "ERROR";
    }
    else {
        while (num > 0){
            string1 += string;
            num -- ;
        }
        return string1;
    }
};

// Do not edit below this line
module.exports = repeatString;
