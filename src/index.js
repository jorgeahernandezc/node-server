const readlineSync = require('readline-sync');
const chalk = require ('chalk');
let arrayTareas = [];
let continuar = true;
let respuesta;
let opcion;

//Clase de objeto Tarea
class Tarea {
    constructor(descripcion) {
      this.descripcion = descripcion;
      this.estatus = "No completado";
    }

    // Método
    cambiarEstatus() {
      this.estatus = "Completado";
    }

  }

// Conuslta de nombre de usuario
let userName = readlineSync.question(chalk.blue('Cual es tu nombre? '));
console.log(chalk.blue('Hola ' + userName + '!'));

// Agregar tareas a la lista
const agregarTarea = (tarea) => {
 const nuevaTarea = new Tarea(tarea);
 arrayTareas.push(nuevaTarea);
}

//Cambiar estatus de tarea a completado
const completarTarea = (id) => {
    const tareaCompletada = arrayTareas[id];
    tareaCompletada.cambiarEstatus();
}

//Eliminar tarea de la lista
const eliminarTarea = (id) => {
    arrayTareas.splice(id, 1);
}

//Mostrar tareas
const mostrarTareas = () => {
    if(arrayTareas.length===0){
        console.log(chalk.yellow(("No tienes tareas pendientes")));
    }else{
    arrayTareas.map((tarea, index) => {
        if(tarea.estatus==="Completado"){
            console.log(chalk.greenBright(`Tarea ${index+1}: ${tarea.descripcion} - ${tarea.estatus}`));
    }
        else{
            console.log(chalk.red(`Tarea ${index+1}: ${tarea.descripcion} - ${tarea.estatus}`));
        }
    });
    }
}

//ciclo de ejecucion del programa
while (continuar) { 
    console.log("");
    console.log(chalk.blue(userName+" esta es tu lista de tareas"));
    mostrarTareas();
    console.log("");
    console.log(chalk.blue(" Ingresa 1. Para agregar una tarea\n Ingresa 2. Para completar una tarea\n Ingresa 3. Para eliminar una tarea\n Ingresa 4. Para salir"));
    console.log ("");

    respuesta = readlineSync.question(chalk.blue("Ingresa tu opcion: "));

    if(respuesta=== "1"){
        opcion=readlineSync.question(chalk.blue("Ingresa la descripcion de la tarea que deseas agregar: "));
        agregarTarea(opcion);
    }else if(respuesta=== "2"){
        opcion=readlineSync.question(chalk.blue("Ingresa el numero de la tarea que deseas completar: "));
        completarTarea(opcion-1);
    }else if (respuesta=== "3"){
        opcion=readlineSync.question(chalk.blue("Ingresa el numero de la tarea que deseas eliminar: "));
        eliminarTarea(opcion-1);
    }else if (respuesta=== "4"){
        continuar=false;
    }else{   
        console.log(chalk.red("Opcion no valida"));
    }


}
