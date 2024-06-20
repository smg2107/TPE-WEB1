const url = 'https://66742cdf75872d0e0a95676d.mockapi.io/api/entrada';
let datos = [];
let container = document.querySelector("#use-ajax");
let tabla = document.querySelector("#tabla");
let botonEnviar = document.querySelector("#btn-form");
botonEnviar.addEventListener('click',enviarDatos);

let id=0;

//GET FILA 1
async function obtenerDatos(){
    
    container.innerHTML = "<p>Loading...</p>";
    try {
        let res = await fetch(url);

        if (res.ok) {
            datos = await res.json();

            container.innerHTML = "";
            container.classList.remove("exito");
            container.classList.remove("error");
            dibujarTabla(datos);
        }
        else {
            container.innerHTML = "<p>Algo salió mal!</p>";
            container.classList.remove("exito");
            container.classList.add("error");
        }
    }
    catch (error) {
        
        container.innerHTML = error;
        container.classList.remove("exito");
        container.classList.add("error");
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
                        <botton class="btn-tabla btn-editar">Editar</botton><span> </span>
                        <botton class="btn-tabla btn-borrar">Borrar</botton>
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
            obtenerDatos();
            container.innerHTML = "Creado correctamente!";
            container.classList.remove("error");
            container.classList.add("exito");
        }
    } catch (error) {
        container.innerHTML = error;
        container.classList.remove("exito");
        container.classList.add("error");
        
    }
    
}
//BORRAR
async function borrarDatos(e){
    e.preventDefault();
    let row = e.target.parentElement.parentElement
    let id = row.id;
    console.log("borrar: ", id);
    try {
        let res = await fetch(url+"/"+id,{
        'method': 'DELETE',
        
        });
        if(res.status==200){
            obtenerDatos();
            container.innerHTML = "Eliminado correctamente!";
            container.classList.remove("error");
            container.classList.add("exito");
        }
    } catch (error) {
        container.innerHTML = error;
        container.classList.remove("exito");
        container.classList.add("error");
    }
}

//EDITAR DATOS
async function editarDatos(e){
    e.preventDefault();
    let row = e.target.parentElement.parentElement
    let id = row.id;
    console.log("editar: ", id);

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
        let res = await fetch(url+"/"+id,{
        'method': 'PUT',
        'headers': {'Content-Type':'application/json'},
        'body':JSON.stringify(data)
        });
        if(res.status==200){
            obtenerDatos();
            container.innerHTML = "Modificado correctamente!";
            container.classList.remove("error");
            container.classList.add("exito");
        }
    } catch (error) {
        container.innerHTML = error;
        container.classList.remove("exito");
        container.classList.add("error");
    }
}
