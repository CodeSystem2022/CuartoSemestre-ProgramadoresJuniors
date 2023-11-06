// this === global = true


// Mostrar algo en consola
//console.log();

// Mostrar mensaje en forma de error
//console.error();

// Ejeutar un codigo despues de un intervalo de tiempo
//setTimeout(( () => {}));

//Ejecutar un codigo cada un intervalo de tiempo
//setInterval(() => {});

// Da prioridad de ejecución a una función asincrónica
//setImmediate(() => {})


//console.log(global);
//console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if(i === 3){
        clearInterval(intervalo); //detenemos la funciób
    }
    ++;
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato')
});

//require();


console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = 'Mi variable global'
console.log(miVariable);
