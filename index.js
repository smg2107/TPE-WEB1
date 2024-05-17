//codigo captcha
let codigocaptcha;
codigocaptcha=Math.floor(Math.random() * 999 )+1;

let numerocaptcha = document.getElementById("numerocaptcha");
let confirmacioncaptcha = document.getElementById("confimarcioncaptcha");
let boton = document.getElementById("boton");
if (boton && numerocaptcha) {
    boton.addEventListener("click", validacioncaptcha);
    numerocaptcha.innerText = codigocaptcha;
}

//Verificar si lo ingresado es correcto o no y colocar cartel en pantalla
function validacioncaptcha(){
    if(numerocaptcha.innerText == escribircaptcha.value){
        let correcto = document.getElementById("confirmacioncaptcha");
        correcto.innerText= "Codigo correcto";
    } else{
        let incorrecto = document.getElementById("confirmacioncaptcha");
        incorrecto.innerText="Codigo incorrecto";
    }
}