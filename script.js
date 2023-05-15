function calculate() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    if (a > b) {
    var temp = a;
    a = b;
    b = temp;
    }
    var sum = 0;
    for (var i = a; i <= b; i++) {
    if (isPrime(i)) {
        sum += i;
    }
}
    document.getElementById("result").innerHTML = "Tổng các số nguyên tố trong khoảng " + a + " và " + b + " là " + sum;
}
function isPrime(n) {
    if (n < 2) {
    return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
    return false;
    }
    }
    return true;
}

function drawTriangle() {
    var size = parseInt(document.getElementById("size").value);
    if (size < 1 || size > 10) {
    document.getElementById("result").innerHTML = "Số hàng không hợp lệ!";
    return;
    }
    var triangle = "";
    for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += "*";
    }
    triangle += "<br>";
    }
    document.getElementById("result").innerHTML = triangle;
}