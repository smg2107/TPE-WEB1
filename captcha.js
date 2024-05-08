//codigo captcha
let codigocaptcha;
codigocaptcha=Math.floor(Math.random() * 999 )+1;

let numerocaptcha = document.getElementById("numerocaptcha");
let confirmacioncaptcha = document.getElementById("confimarcioncaptcha");
let boton = document.getElementById("boton").addEventListener("click", validacioncaptcha);
numerocaptcha.innerText = codigocaptcha;

//Verificar si lo ingresado es correcto o no y colocar cartel en pantalla
function validacioncaptcha(){
    if(numerocaptcha.innerText == escribircaptcha.value){
        let correcto = document.getElementById("confirmacioncaptcha");
        correcto.innerText= "Codigo correcto";
        <><h3>Dejanos tu consulta:</h3><form action="" id="consultas">
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <input type="button" value="ENVIAR">
            </></form></>
    } else{
        let incorrecto = document.getElementById("confirmacioncaptcha");
        incorrecto.innerText="Codigo incorrecto";

    }
}
