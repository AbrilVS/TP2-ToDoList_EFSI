
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

    Lista.map(obj => 
    {        
        let estaTachado = "";
        let checked = "";

        if(obj.esTachado)
        {
            checked = "checked";
            estaTachado = "tachar";
        }

        document.getElementById("mostrar").innerHTML +=`
        <br></br>
            <p class="${estaTachado}"><input type="checkbox" ${checked} onclick="Marcar(${obj.id})">${obj.titulo}</p>
        
        `;
    });    
}

const Marcar = idi => {
    Lista.map(obj =>{
        if(obj.id==idi){
            obj.esTachado= !obj.esTachado;
            console.log(obj.titulo)
            obj.fechaFin=Date.now();            
        }
    }) 

    mostrarTareas();
}    
var minNum = 999999999;
var maxNom="ay"
const Calc= ()=>{
    Lista.map(obj =>{
        if(obj.esTachado){
            let resta= obj.fechaFin-obj.fechaInicio;
            console.log(resta);
            if(resta< minNum){
                minNum=resta;
                maxNom=obj.titulo;
            }
                    
        }
    })
    document.getElementById("max").innerHTML +=`
        <p>${maxNom}</p>
    `
}
