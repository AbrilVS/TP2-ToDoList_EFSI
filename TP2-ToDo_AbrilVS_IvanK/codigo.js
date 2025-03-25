
var Lista=[];
var contador=0;
const Agregar=() =>{
    contador++
    let nombre=document.getElementById("txt").value
    let tarea={
        id:contador,
        titulo:nombre,
        fechaInicio:Date.now(),
        fechaFin:null,
        esTachado:false
    }

    Lista.push(tarea);
    mostrarTareas();    
}

const mostrarTareas = () =>{
    document.getElementById("mostrar").innerHTML = ""

    //recorro el array
    //pinto en pantalla mi array
    Lista.map(obj => 
    {        
        
        document.getElementById("mostrar").innerHTML +=`
        <br>
            <input type="checkbox" onclick="Marcar(${obj.id})">${obj.titulo}
            </br>
        `;
    });    
}



const Marcar = (id)=>{
    //recorrer el array buscando el elemento con ese id.
    //modifican el valor del esTachado. 
    //llaman a mostrarTareas
}