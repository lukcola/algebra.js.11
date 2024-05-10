let inputPrvi = document.getElementById("name");
let inputDrugi = document.getElementById("surname");
let inputTreci = document.getElementById("email");

let buttonSend = document.getElementById("submit");
let buttonReset = document.getElementById("reset");

function fokusIn(e) {
    e.target.style.backgroundColor = "yellow";
}
function fokusOut(e) {
    if (e.target.value = "") {
        e.target.style.backgroundColor = "red";
    }
}

function fokusOutEmail(e) {
    e.target.style.backgroundColor = "lightgrey"
    if (e.target.value.indexOf("@") < 0) {
        e.target.style.backgroundColor = "red";
    }
}

function sendClick(){
    if(InputEmail.value.indexOf("@" < 0)){
        alert("Email je neispravan, ne sadrži @ znak");
        inputTreci.style.background = "red";
    }
}

function resetClick(){
    letyesNo = confirm("Želite li resetirati sva polja?");
    console.log("Yes/No = " + yesNo);
    if(yesNo){
        inputPrvi.value = "";

    }
}

inputPrvi.addEventListener('focus', fokusIn);
inputPrvi.addEventListener('blur', fokusOut);

inputDrugi.addEventListener('focus', fokusIn);
inputDrugi.addEventListener('blur', fokusOut);

inputTreci.addEventListener('focus', fokusIn);
inputTreci.addEventListener('blur', fokusOutEmail);

buttonSend.addEventListener("click", sendClick);
buttonReset.addEventListener("click", resetClick);