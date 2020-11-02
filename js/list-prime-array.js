let array1 = [];
function listPrimeArray() {
    for (let i=0;i<array.length;i++) {
        checkPrime(array[i]);
        if (flag) {
            array1.push(array[i]);
        }
    }
    document.getElementById("list-prime-array").innerHTML = array1;
}