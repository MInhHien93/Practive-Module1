// let number = +prompt("Enter a number");
// let number = document.getElementById("input-N").value;
function checkPrime(number) {
    let n = number;
    let i = 2;
    // let flag = true;
    if (n < i) {
        // alert(n + " không phải số nguyên tố");
        return flag = false;
    }
    while (i < n) {
        if (n % i === 0) {
            return flag = false;
        }
        i++;
    }
    // console.log(n);
    return flag = true;
}

// checkPrime(number);
// console.log(checkPrime(number));

function checkN() {
    let number = document.getElementById("input-N").value;
    checkPrime(number);
    if (flag) {
        document.getElementById("display-prime").innerHTML = number + " là số nguyên tố";
    } else {
        document.getElementById("display-prime").innerHTML = number + " không phải số nguyên tố";
    }

}
