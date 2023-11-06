// La palabra async no es necesaria en las funciones porque ya son asíncronas
// De todas formas proyectan una sincronía visual
async function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function() {
            // Validamos el error o aprobación
            console.log('Hola '+ nombre);
            // if(err) reject('Hay un error')
            resolve(nombre);
        }, 1000);  
    });
}

async function hablar(nombre){
    return new Promise( (resolve, reject) => { //Usamos la sintaxis ES6
        setTimeout(function(){
            console.log('bla bla bla bla');
            //resolve();
            reject('Hay un error');
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise( (resolve, reject) =>{
        setTimeout(function() {
            console.log('Adios '+ nombre);
            resolve(nombre);
        }, 1500);
    });
} 

//await hola('Bianca'); // Esto no se debe usar, mala sintaxis
// await solo es válido dentro de una funcion asíncrona
async function main(){
    let nombre = await hola('Bianca');
    await hablar();
    await hablar();
    await hablar();
    await adios (nombre);
    console.log('Termina el proceso...')
}

console.log('Empezamos el proceso...')
main();
console.log('Segunda instrucción')

// En ingles
function sayHello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Hello" + name);
        resolve(name);
    }, 1000);
    });
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Bla bla bla bla");
        resolve(name);
    }, 1000);
    });
}

function sayBye(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Goodbye" + name);
        resolve(name);
    }, 1000);
    });
}

async function conversation(name){
    console.log("Code in english");
    console.log("Starting async process...");
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log("Process completed");
}


conversation("Bianca")
