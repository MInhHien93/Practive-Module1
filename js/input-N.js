function checkOddNumber() {
    let number = document.getElementById("input-N").value;
    while (number % 2 === 0 || number < 0) {
        alert("Enter a number again");
        break;
    }
    // alert(number + " is a positive a number");
}
