const Marcar = idi => {
    Lista.map(obj =>{
        if(obj.id==idi){
            obj.esTachado= true;
            obj.fechaFin=Date.now();
            mostrarTareas("tachar");
        }
    }) 
      //document.querySelectorAll(".") si es clase ./ si es id # ("#")
