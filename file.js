function show(button) {
    document.getElementById("name").value += button
}

function ketqua() {
    let tam = eval(document.getElementById("name").value)
    document.getElementById("name").value = tam
}

function del() {
    document.getElementById("name").value = ""
}