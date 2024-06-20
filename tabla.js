// let promesa= fetch(url);
// promesa.then(Response=>);

// // Usando then
// fetch('')
// .then(function(r)){
//     return r.text()
// })
// .then(function(html){
//     console.log(html);
// })
// .catch(function(e){
//     console.log("boo");
// })

// //Usando async await

// async function load2(event){
//     event.preventDefault();
//     let container = document.querySelector("#use-ajax");
//     container.innerHTML = "<h1>Loading...</h1>";
//     try{
//         let response = await fetch(url);
//         if (response.ok){
//             let t = await response.text()
//             container.innerHTML = t;
//         }
//         else
//         container.innerHTML = "<h1>Error</h1>";
//     }
//     catch(response){
//         container.innerHTML = "<h1>Error conexion</h1>";
//     };
// }

//el valor de retorno de la promesa Fetch es un objeto Response con informacion del request realizado
//cada respuesta puede tener datos en su cuerpo, el tipo de contenido usado en este caso es json.
// res.json()

//AJAX REST, es  informacion en formato json, se carga un objeto json y se procesa del lado del cliente con JS

//una API es una interfaz que nos da una aplicacion para comunicarnos con ella
//nos permite que una aplicacion o programa de computadora se comunique con otro

//REST: REpresentation State Transfer, es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estandar HTTP, para crear APIs para servicios orientados a Internet

//JSON: JavaScript Object Notation.
// let objeto=
// {
//     "propiedad":valor,
//     "propiedad2":valor2
// }

// URL https://667348d16ca902ae11b3b9d1.mockapi.io/api/Entradas

const url = 'https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada';
const lugar1 = document.querySelector("#lugar1");
const dia1 = document.querySelector("#dia1");
const horario1 = document.querySelector("#horario1");
const punto1 = document.querySelector("#punto1");
const valor1 = document.querySelector("#valor1");

const lugar2 = document.querySelector("#lugar2");
const dia2 = document.querySelector("#dia2");
const horario2 = document.querySelector("#horario2");
const punto2 = document.querySelector("#punto2");
const valor2 = document.querySelector("#valor2");

const lugar3 = document.querySelector("#lugar3");
const dia3 = document.querySelector("#dia3");
const horario3 = document.querySelector("#horario3");
const punto3 = document.querySelector("#punto3");
const valor3 = document.querySelector("#valor3");

const lugar4 = document.querySelector("#lugar4");
const dia4 = document.querySelector("#dia4");
const horario4 = document.querySelector("#horario4");
const punto4 = document.querySelector("#punto4");
const valor4 = document.querySelector("#valor4");

let id=0;

//GET FILA 1
async function obtenerDatos1(){
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/1');
        let json = await res.json();
        console.log(json);
        let lugar = json.lugar;
        let dia = json.dia;
        let horario = json.horario;
        let punto = json.punto;
        let valor = json.valor; 
        id= json.id;
        lugar1.innerHTML += lugar;
        dia1.innerHTML += dia;
        horario1.innerHTML += horario;
        punto1.innerHTML += punto;
        valor1.innerHTML += valor;
        }
        
    catch (error) {
        console.log(error);
    }
}
async function obtenerDatos2(){
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/2');
        let json = await res.json();
        console.log(json);
        let lugar = json.lugar;
        let dia = json.dia;
        let horario = json.horario;
        let punto = json.punto;
        let valor = json.valor; 
        id= json.id;
        lugar2.innerHTML += lugar;
        dia2.innerHTML += dia;
        horario2.innerHTML += horario;
        punto2.innerHTML += punto;
        valor2.innerHTML += valor;
        }
        
    catch (error) {
        console.log(error);
    }
}
async function obtenerDatos3(){
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/3');
        let json = await res.json();
        console.log(json);
        let lugar = json.lugar;
        let dia = json.dia;
        let horario = json.horario;
        let punto = json.punto;
        let valor = json.valor; 
        id= json.id;
        lugar3.innerHTML += lugar;
        dia3.innerHTML += dia;
        horario3.innerHTML += horario;
        punto3.innerHTML += punto;
        valor3.innerHTML += valor;
        }
        
    catch (error) {
        console.log(error);
    }
}
async function obtenerDatos4(){
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/4');
        let json = await res.json();
        console.log(json);
        let lugar = json.lugar;
        let dia = json.dia;
        let horario = json.horario;
        let punto = json.punto;
        let valor = json.valor; 
        id= json.id;
        lugar4.innerHTML += lugar;
        dia4.innerHTML += dia;
        horario4.innerHTML += horario;
        punto4.innerHTML += punto;
        valor4.innerHTML += valor;
        }
        
    catch (error) {
        console.log(error);
    }
}
obtenerDatos1();
obtenerDatos2();
obtenerDatos3();
obtenerDatos4();

async function enviarDatos(e){
    e.preventDefault();

    let lugar = document.querySelector("#input-lugar").value;
    let dia = document.querySelector("#input-dia").value;
    let horario = document.querySelector("#input-horario").value;
    let punto = document.querySelector("#input-punto").value;
    let valor = document.querySelector("#input-valor").value;
    let data = {"lugar": lugar,
        "dia": dia,
        "horario": horario,
        "punto": punto,
        "valor": valor
}
    try {
        let res = await fetch(url,{
        'method': 'POST',
        'headers': {'Content-Type':'application/json'},
        'body':JSON.stringify(data)
        });
        if(res.status==201){
            console.log("Creado!");
        }
    } catch (error) {
        console.log(error);
        
    }
    
}
//BORRAR FILA 1
async function borrarDatos1(e){
    e.preventDefault();
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/1',{
        'method': 'DELETE',
        
        });
        if(res.status==200){
            console.log("Eliminado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//BORRAR FILA 2
async function borrarDatos2(e){
    e.preventDefault();
    
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/2',{
        'method': 'DELETE',
        
        });
        if(res.status==200){
            console.log("Eliminado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//BORRAR FILA 3
async function borrarDatos3(e){
    e.preventDefault();

    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/3',{
        'method': 'DELETE',
        
        });
        if(res.status==200){
            console.log("Eliminado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//BORRAR FILA 4
async function borrarDatos4(e){
    e.preventDefault();
  
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/4',{
        'method': 'DELETE',
        
        });
        if(res.status==200){
            console.log("Eliminado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//EDITAR DATOS FILA 1
async function editarDatos1(e){
    e.preventDefault();
    let lugar = document.querySelector("#input-lugar").value;
    let dia = document.querySelector("#input-dia").value;
    let horario = document.querySelector("#input-horario").value;
    let punto = document.querySelector("#input-punto").value;
    let valor = document.querySelector("#input-valor").value;
    let data = {"lugar": lugar,
        "dia": dia,
        "horario": horario,
        "punto": punto,
        "valor": valor
    }
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/1',{
        'method': 'PUT',
        'headers': {'Content-Type':'application/json'},
        'body':JSON.stringify(data)
        });
        if(res.status==200){
            console.log("Modificado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//EDITAR DATOS FILA 2
async function editarDatos2(e){
    e.preventDefault();
    let lugar = document.querySelector("#input-lugar").value;
    let dia = document.querySelector("#input-dia").value;
    let horario = document.querySelector("#input-horario").value;
    let punto = document.querySelector("#input-punto").value;
    let valor = document.querySelector("#input-valor").value;
    let data = {"lugar": lugar,
        "dia": dia,
        "horario": horario,
        "punto": punto,
        "valor": valor
    }
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/2',{
        'method': 'PUT',
        'headers': {'Content-Type':'application/json'},
        'body':JSON.stringify(data)
        });
        if(res.status==200){
            console.log("Modificado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//EDITAR DATOS FILA 3
async function editarDatos3(e){
    e.preventDefault();
    let lugar = document.querySelector("#input-lugar").value;
    let dia = document.querySelector("#input-dia").value;
    let horario = document.querySelector("#input-horario").value;
    let punto = document.querySelector("#input-punto").value;
    let valor = document.querySelector("#input-valor").value;
    let data = {"lugar": lugar,
        "dia": dia,
        "horario": horario,
        "punto": punto,
        "valor": valor
    }
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/3',{
        'method': 'PUT',
        'headers': {'Content-Type':'application/json'},
        'body':JSON.stringify(data)
        });
        if(res.status==200){
            console.log("Modificado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

//EDITAR DATOS FILA 4
async function editarDatos4(e){
    e.preventDefault();
    let lugar = document.querySelector("#input-lugar").value;
    let dia = document.querySelector("#input-dia").value;
    let horario = document.querySelector("#input-horario").value;
    let punto = document.querySelector("#input-punto").value;
    let valor = document.querySelector("#input-valor").value;
    let data = {"lugar": lugar,
        "dia": dia,
        "horario": horario,
        "punto": punto,
        "valor": valor
    }
    try {
        let res = await fetch('https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada/4',{
        'method': 'PUT',
        'headers': {'Content-Type':'application/json'},
        'body':JSON.stringify(data)
        });
        if(res.status==200){
            console.log("Modificado!");
        }
    } catch (error) {
        console.log(error);
        
    }
}

document.querySelector("#btn-form").addEventListener('click',enviarDatos);

document.querySelector("#btn-borrar1").addEventListener('click',borrarDatos1);
document.querySelector("#btn-editar1").addEventListener('click',editarDatos1);

document.querySelector("#btn-borrar2").addEventListener('click',borrarDatos2);
document.querySelector("#btn-editar2").addEventListener('click',editarDatos2);

document.querySelector("#btn-borrar3").addEventListener('click',borrarDatos3);
document.querySelector("#btn-editar3").addEventListener('click',editarDatos3);

document.querySelector("#btn-borrar4").addEventListener('click',borrarDatos4);
document.querySelector("#btn-editar4").addEventListener('click',editarDatos4);