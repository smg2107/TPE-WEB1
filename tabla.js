const url = 'https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada';
let datos = [];
let container = document.querySelector("#use-ajax");
let tabla = document.querySelector("#tabla");
let botonEnviar = document.querySelector("#btn-form");
botonEnviar.addEventListener('click',crearDatos);

let id=0;

//GET FILA 1
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
function dibujarTabla(datos) {
    let filas = "";

    for (let i = 0; i < datos.length; i++) {
        const fila = datos[i];

        let id= fila.id;
        let lugar = fila.lugar;
        let dia = fila.dia;
        let horario = fila.horario;
        let punto = fila.punto;
        let valor = fila.valor;
        
        filas += `<tr id="${id}">
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
        const btnBorrar = botonesBorrar[i];
        btnBorrar.addEventListener('click',borrarDatos);
    }
    for (let i = 0; i < botonesEditar.length; i++) {
        const btnEditar = botonesEditar[i];
        btnEditar.addEventListener('click',editarDatos);
    }
}
obtenerDatos();

function mostrarMensaje(texto, clase) {
    container.classList.remove("exito");
    container.classList.remove("error");
    container.classList.remove('ocultar');
    container.innerHTML = `<p>${texto}</p>`;
    container.classList.add(clase);
}
function ocultarMensaje() {
    container.classList.add('ocultar');
}


//CREAR
async function crearDatos(e){
    e.preventDefault();

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
                    mostrarMensaje("Creado correctamente!", "exito");
                })
            }
        } catch (error) {
            mostrarMensaje(`<p>${error}</p>`, "error");
        }
    }
    
}

function validarCampos() {    
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

//BORRAR
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
                mostrarMensaje("Eliminado correctamente!", "exito");
            })
        }
    } catch (error) {
        mostrarMensaje(`<p>${error}</p>`, "error");
    }
}

//EDITAR DATOS
async function editarDatos(e){
    e.preventDefault();
    let row = e.target.parentElement.parentElement.parentElement
    let id = row.id;

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
                    mostrarMensaje("Modificado correctamente!", "exito");
                })
            }
        } catch (error) {
            mostrarMensaje(`<p>${error}</p>`, "error");
        }
    }
}
