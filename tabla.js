const url = 'https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada';
let datos = [];
let container = document.querySelector("#use-ajax");
let tabla = document.querySelector("#tabla");
let botonEnviar = document.querySelector("#btn-form");
botonEnviar.addEventListener('click',crearDatos);
let botonCrear = document.querySelector("#crear-evento");
botonCrear.addEventListener('click', mostrarInput);

//OBTENER DATOS

async function obtenerDatos(){
    
    container.innerHTML = "<p>Loading...</p>";
    try {
        let res = await fetch(url);

        if (res.ok) {
            datos = await res.json();

            dibujarTabla(datos);
            ocultarMensaje();
        }
        else {
            mostrarMensaje("Algo salió mal!", "error");
        }
    }
    catch (error) {
        mostrarMensaje(error, "error");
    }
}

// DIBUJAR TABLA

function dibujarTabla(datos) {
    let filas = "";

    for (let i = 0; i < datos.length; i++) {
        let fila = datos[i];

        let id= fila.id;
        let lugar = fila.lugar;
        let dia = fila.dia;
        let horario = fila.horario;
        let punto = fila.punto;
        let valor = fila.valor;
        
        filas += `  <tr id="${id}">
                        <td>${lugar}</td>
                        <td>${dia}</td>
                        <td>${horario}</td>
                        <td>${punto}</td>
                        <td>${valor}</td>
                        <td class="td-btn">
                            <div>
                                <button class="btn-tabla btn-editar">Editar</button>
                                <button class="btn-tabla btn-borrar">Borrar</button>
                            </div>
                        </td>
                    </tr>`
    }

    tabla.innerHTML = filas;

    
    let botonesBorrar = document.querySelectorAll(".btn-borrar");
    let botonesEditar = document.querySelectorAll(".btn-editar");
    for (let i = 0; i < botonesBorrar.length; i++) {
        let btnBorrar = botonesBorrar[i];
        btnBorrar.addEventListener('click',borrarDatos);
    }
    for (let i = 0; i < botonesEditar.length; i++) {
        let btnEditar = botonesEditar[i];
        btnEditar.addEventListener('click',editarDatos);
    }
}
obtenerDatos();

// MOSTRAR MENSAJE

function mostrarMensaje(texto, clase) {
    container.classList.remove("exito");
    container.classList.remove("error");
    container.classList.remove("ocultar");
    container.innerHTML = `<p>${texto}</p>`;
    container.classList.add(clase);
}

//OCULTAR MENSAJE

function ocultarMensaje() {
    container.classList.add('ocultar');
}
//MOSTRAR INPUT
function mostrarInput(){
    let form = document.querySelector(".form-tabla");
    form.classList.remove("ocultar-form");
    form.classList.add("mostrar-form");
    let btnForm = document.querySelector("#btn-form");
    btnForm.classList.add("mostrar-boton");
}

//OCULTAR INPUT
function ocultarInput(){
    let form = document.querySelector(".form-tabla");
    form.classList.toggle("ocultar-form");
    
}

//CREAR DATOS

async function crearDatos(e){
    e.preventDefault();
    let btnForm = document.querySelector("#btn-form");
    btnForm.classList.add("mostrar-boton");

    let data = validarCampos();

    if ( data ) {
        try {
            let res = await fetch(url,{
            'method': 'POST',
            'headers': {'Content-Type':'application/json'},
            'body':JSON.stringify(data)
            });
            if(res.status==201){
                obtenerDatos().then(function(){ 
                    mostrarMensaje("¡Creado correctamente!", "exito");
                    form.reset();
                    ocultarInput();
                })
            }
        } catch (error) {
            mostrarMensaje(`<p>${error}</p>`, "error");
        }
    }
    
}

//VALIDAR DATOS

function validarCampos() {
    let id = document.querySelector("#input-id").value;
    let lugar = document.querySelector("#input-lugar").value;
    let dia = document.querySelector("#input-dia").value;
    let horario = document.querySelector("#input-horario").value;
    let punto = document.querySelector("#input-punto").value;
    let valor = document.querySelector("#input-valor").value;

    if ( lugar == "" || dia == "" || horario == "" || punto == "" || valor == "" ) {
        mostrarMensaje("Debe completar todos los campos.", "error");
        return false;
    } else {
        let data = {
            "lugar": lugar,
            "dia": dia,
            "horario": horario,
            "punto": punto,
            "valor": valor
        }
        return data;
    }
}

//BORRAR DATOS
async function borrarDatos(e){
    e.preventDefault();
    let row = e.target.parentElement.parentElement.parentElement
    let id = row.id;
    console.log("borrar: ", id);
    try {
        let res = await fetch(url+"/"+id,{
        'method': 'DELETE',
        
        });
        if(res.status==200){
            obtenerDatos().then(function(){ 
                mostrarMensaje("¡Eliminado correctamente!", "exito");
            })
        }
    } catch (error) {
        mostrarMensaje(`<p>${error}</p>`, "error");
    }
}

//EDITAR DATOS 

async function editarDatos(e){
    e.preventDefault();
    let row = e.target.parentElement.parentElement.parentElement;
    let id = row.id;
    mostrarInput();
    let btnForm = document.querySelector("#btn-form");
    btnForm.classList.remove("mostrar-boton");
    btnForm.classList.add("ocultar-boton");

    let data = validarCampos();

    if ( data ) {
        try {
            let res = await fetch(url+"/"+id,{
            'method': 'PUT',
            'headers': {'Content-Type':'application/json'},
            'body':JSON.stringify(data)
            });
            if(res.status==200){
                obtenerDatos().then(function(){
                    mostrarMensaje("¡Modificado correctamente!", "exito");
                    form.reset();
                    ocultarInput();
                    
                })
            }
        } catch (error) {
            mostrarMensaje(`<p>${error}</p>`, "error");
        }
    }
}