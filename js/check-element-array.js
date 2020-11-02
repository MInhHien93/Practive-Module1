function checkElementArray() {
    let number = +document.getElementById("input-N").value;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            document.getElementById("check-element-array").innerHTML = "vị trí " + i;
        }
    }
}