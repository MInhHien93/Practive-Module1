let count = 0;
let n = 3;
// let array = [];
function listPrime() {
    let quantity = document.getElementById("input-N").value;
    while (count < quantity) {
        let check = checkPrime(n);
        if (check) {
            array[count] = n;
            count++;
        }
        n++;
    }
    document.getElementById("display-listPrime").innerHTML = array;
}
