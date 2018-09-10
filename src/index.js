
function multiply(x, y) {
    return x * y;
}

function double(x) {
    return x * 2;
}


// (5 * 2) * 3 = 30
let x = 5
    |> double
    |> (five => multiply(five, 3));

console.log(x);

let arr = [1,2,3,4,5,6,7,8,9,10];

// An array where each element in arr has 1 added to it
let arrPlusOne = ((n)=> n + 1) |> arr.map;

console.log(arrPlusOne);