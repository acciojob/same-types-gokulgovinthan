function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function isSameType(value1, value2) {
    // Check if both inputs are NaN
    if (isNaN(value1) && isInteger(Number(value2))) {
        return false;
    }
    // Check if the types of the values are the same
    else if (typeof value1 === typeof value2) {
        return true;
    }
    // If none of the conditions are met, return false
    return false;
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));