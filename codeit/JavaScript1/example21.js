// return과 console.log의 차이
function printSquare(x) {
    console.log(x * x);
}

function getSquare(x) {
    return x * x;
}

printSquare(3);

getSquare(3);

console.log(getSquare(3));