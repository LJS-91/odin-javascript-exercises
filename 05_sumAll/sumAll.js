const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    else if (typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    else if (start < end){
        for (let i = start; i <= end; i++) {
        sum = sum + i;
        }
        return sum;
    } 
    else if (start > end){
        for (let i = end; i <= start; i++) {
        sum = sum + i;
        }
        return sum;
    }
    else {
        return "NOTHING WORKED MAN";
    }
};

// Do not edit below this line
module.exports = sumAll;
