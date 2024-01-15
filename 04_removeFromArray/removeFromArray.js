const removeFromArray = function() {

const array = arguments[0];
let newArray = array;
    for (i=1; i < arguments.length; i++)
    {
        for (j = 0; j < array.length; j++) {
            if (newArray[j] === arguments[i]) {
                newArray = newArray.toSpliced(j,1);
            }
        }
    }
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
