function enviarSaludo(){
    let nombre = prompt("Hola desconocido, dime tu nombre");
    
    if (nombre != null){
     document.getElementById("etiqueta").innerHTML = `Ya no eres un desconocido, tu nombre es: ${nombre}`
    } 
    else{
        document.getElementById("etiqueta").innerHTML = `SEGUIRAS SIENDO UN DESCONOCIDO ;C `
    }
}

