const leapYears = function(year) {

// Solution 1:    
/*if ((year%4 == 0 && year%100 != 0) || (year%100 == 0 && year%400 == 0)){
    return true;
}
else {
    return false;
}*/

//Solution 2:
return year%4 == 0 && (year%100 != 0 || year%400 == 0);
};

// Do not edit below this line
module.exports = leapYears;
