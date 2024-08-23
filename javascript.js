const addButton = document.getElementById("agregar");
const averageButton = document.getElementById("promedio");
const listaButton = document.getElementById("lista");
const eliminarButton = document.getElementById("eliminar");
let constNombres = "";

const datos = new Map ([
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

function lista(){

    if (datos.size === 0) {
        console.log("No hay contenido en la lista");
        window.alert("No hay contenido en la lista");
    } else {
        console.log(datos);
        // window.alert(mapCont);
    }

}

addButton.addEventListener("click", function(){
    let nota = document.getElementById("calificación").value;
    let nombre = document.getElementById("nombre").value;
    añadir(nombre, nota);
    console.log(datos);
});

averageButton.addEventListener("click", function(){
    promedio();
});

listaButton.addEventListener("click", function(){
    lista();
    mapCont = "";
    datos.forEach((nota, nombre) => {
        console.log(`${nombre}: ${nota}`);
        console.log("Agregando a (" + `${nombre}: ${nota}` + ") a la lista de texto");
        mapCont += `Nombre: ${nombre}, Nota: ${nota}\n`;
    });
    alert(mapCont);
});

eliminarButton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let nota = document.getElementById("calificación").value;
    datos.delete(nombre);
    console.log(datos);

    mapCont = "";

    window.alert("Retirando de la lista al estudiante " + nombre + ", con la nota " + nota + ".");

    datos.forEach((nota, nombre) => {
        mapCont += `Nombre: ${nombre}, Nota: ${nota}\n`;
    });

    // const [name, valor] = line.split(':').map(part => part.trim());
    // datos.has(name)
});