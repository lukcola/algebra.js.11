console.log("JAVA LOADED!");

function fokusIn() {
    console.log("Događaj na fokusIn");
    let input1 = document.getElementById("input1");
    input1.style.backgroundColor = "yellow";
}

function fokusOut() {
    console.log("Događaj na fokusOut");
    let input2 = document.getElementById("input1");
    input2.style.backgroundColor = "red";
}

function klikButton() {
    console.log("Događaj na OnClick button");
    alert("Kliknuli ste na button");
    let input3 = document.getElementById("input1");
    input3.style.backgroundColor = "white";
}

let inputDrugi = document.getElementById("input2");
inputDrugi.addEventListener('focus', fokusIn2);
inputDrugi.addEventListener('blur', fokusOut2);

function fokusIn2(){
    inputDrugi.style.backgroundColor = "green";
}

function fokusOut2(){
    inputDrugi.style.backgroundColor = "purple";
}