function softElement() {
    let number = +document.getElementById("input-N").value;
    for (let i = 0; i < array.length; i++) {
        array.sort(function (a, b) {return a - b})
        }
    document.getElementById("soft-element-array").innerHTML = array;
    }

