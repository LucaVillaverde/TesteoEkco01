const addButton = document.getElementById("agregar");
const averageButton = document.getElementById("promedio");
const listaButton = document.getElementById("lista");
const eliminarButton = document.getElementById("eliminar");
const verifButton = document.getElementById("verificar");
let constNombres = "";

const datos = new Map ([
    ["Luca Villaverde", 12],
    ["Jesus Gomez", 10],
    ["Enzo Hernandez", 8],
]);

let mapCont = "";

function añadir(nombre, nota){
    datos.set(nombre, nota);
    window.alert("Ingresando a la lista al estudiante " + nombre + ", con la nota " + nota + ".");
}

function promedio(){
    let totalNota = 0;
    let totalAlumnos = 0;
    constNombres = "";
    constNombres + "";
    let contMap = datos.size;

    if (contMap <= 1){
        window.alert("No tiene sentido hacer el promedio de una persona o ninguna...");
    } else {

        datos.forEach (function(nota, nombre) {
            totalNota += parseInt(nota);
            console.log("Integrando la nota de " + nombre);
            totalAlumnos++;
            constNombres += (nombre + ", ");
        })
    
        promedioNotas = (totalNota / totalAlumnos);
    
        console.log("Cantidad de notas ingresadas = " + totalAlumnos);
        console.log("Suma total de todas las notas = " + totalNota);
        console.log("El promedio de las notas es = " + promedioNotas);
        window.alert("Integrando las notas de " + constNombres + " al promedio." + "\n\n" 
                     + "Cantidad de notas ingresadas = " + totalAlumnos + ",\n\n"
                     + "la suma total de todas las notas = " + totalNota + ",\n\n" 
                     + "el promedio de las notas es = " + promedioNotas);

    }
}

function lista(){
    let cantEstudiantes = datos.size;

    if (cantEstudiantes === 0) {
        console.log("No hay contenido en la lista");
        window.alert("No hay contenido en la lista");
    } else {
        console.log(datos);
        alert("La cantidad de estudiantes es " + cantEstudiantes + " y son los siguientes:\n\n" + mapCont);
    }

}

addButton.addEventListener("click", function(){
    let nota = document.getElementById("calificación").value;
    let nombre = document.getElementById("nombre").value;
    let verifNombre = nombre[0] === " ";
    let verifNombre1 = nombre.length < 2;
    let verifNota = !isNaN(nota) && nota < 1;
    let verifNota1 = nota > 12;
    if (verifNombre || verifNota){
        window.alert("Verifica que lo ingresado en el apartado estudiante no contenga espacios al principio y que este bien la nota.");
    } else if (verifNota1) {
        window.alert("la nota que estas queriendo ingresar no es valida.")
    } else if (verifNombre1) {
        window.alert("Todo el mundo sabe que no existe un nombre y apellidos tan cortos, favor de escribir bien.");
    } else if (nombre.endsWith(" ")){
        window.alert("Ojo los espacios al final del campo estudiante...");
    } else {
        añadir(nombre, nota);
        console.log(datos);
    }
});

averageButton.addEventListener("click", function(){
    promedio();
});

listaButton.addEventListener("click", function(){
    mapCont = "";
    datos.forEach((nota, nombre) => {
        console.log(`${nombre}: ${nota}`);
        console.log("Agregando a (" + `${nombre}: ${nota}` + ") a la lista de texto.");
        mapCont += `Nombre: ${nombre}, Nota: ${nota}.\n`;
    });
    lista();
});

eliminarButton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let notaMap = datos.get(nombre);
    console.log(datos);

    let verifNombre = nombre[0] === " ";
    let verifNombre1 = nombre.length < 2;
    if (verifNombre){
        window.alert("Verifica que lo ingresado en el apartado estudiante no contenga espacios al principio.");
    } else if (verifNombre1) {
        window.alert("Todo el mundo sabe que no existe un nombre y apellidos tan cortos, favor de escribir bien.");
    } else if (datos.has(nombre)){
        window.alert("Retirando de la lista al estudiante " + nombre + ", con la nota " + notaMap + ".");

        datos.delete(nombre);
    } else {
        window.alert("Ese estudiante no estaba en la lista.");
    }
});

verifButton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let verif = datos.has(nombre);
    let notaMap = datos.get(nombre);
    if (nombre.length < 2){
        window.alert("Favor de ingresar a un estudiante en un formato logico (campo de estudiante lleno con muy poco contenido...).");
    } else if (nombre[0] === " ") {
        window.alert("Cuidado con los espacios al principo del campo Estudiante.");
    } else if (nombre.endsWith(" ")){
        window.alert("Ojo los espacios al final del campo estudiante...");
    } else if (verif) {
        window.alert("El estudiante " + nombre + " si se encuentra en la lista y tiene " + notaMap + " de nota.");
    } else {
        window.alert("Ese estudiante no se encuentra en la lista.");
    }

});