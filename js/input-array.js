// let array = [];
function inputArray() {
    let number = document.getElementById("input-N").value;
    for (let i = 0; i < number; i++) {
        array[i] = +prompt("Enter a " + number + " number");
    }
    document.getElementById("input-array").innerHTML = array;
}
