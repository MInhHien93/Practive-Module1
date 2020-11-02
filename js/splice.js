function spliceElement() {
    let number = +document.getElementById("input-N").value;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            array.splice(i,1);
            i--;
        }
    }
    document.getElementById("splice-element-array").innerHTML = array;
}