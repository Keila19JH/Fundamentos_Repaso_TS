
//variables = (algo que es cambiante) var, let, const 
/*
    let m;
    const n = 10;
*/

//tipos de datos: string, number, boolean, array [], object {}, [fuction], class, char

//se clasifican por tipos de datos por valor y por referencia

//string = unión de varios caracteres 

/*
let saludo: string; 
saludo = 'hola mundo';
console.log(saludo);

//console.  war, error, time

//concatenar = unir una cadena con otras

let nombre:   string = 'Keila';
let concat:  string = ' ';
let apellido: string = 'Gutiérrez';
let fullName: string = nombre + concat +  apellido
console.log(fullName);

//interpolación de strings

fullName = `${nombre} ${apellido}`; 
console.log(fullName); 
*/

/*

//ejemplo 1
let ciudad: string = "Nueva York";
let clima: string = "soleado";
let oracion1: string = 'El cilma en'
let oracion2: string = 'esta';
let sentence: string;
sentence = `${oracion1} ${ciudad} ${oracion2} ${clima}`;
console.log(sentence);
//salida:  El clima en Nueva York esta soleado


//ejemplo 2
let frase: string = "La concatenación";
let restoFrase: string = 'es una forma de unir strings'
let fullSentence: string; 
//la concatenación es una forma de unir strings.
fullSentence = `${frase} ${restoFrase}`; 
console.log(fullSentence);

//console.log(`${frase} ${restoFrase}`);


//ejemplo 3
let valor: number = 42;
let part1: string = 'El valor del número es:'
let setenceNumber: string
setenceNumber = `${part1} ${valor}`
console.log(setenceNumber);
//let part2: string = part1 + ' ' + valor;
//console.log(part2);
//El valor del numero es: 42



//ejemplo 4
let comida: string = "pizza";
let oracion: string = 'Me encanta comer';
let fraseCompleta: string;
let fraseCompleta_Ejemplo: string;
fraseCompleta = `${oracion} ${comida}`

fraseCompleta_Ejemplo = `Me encanta comer ${comida}`;
console.log(fraseCompleta_Ejemplo);
//console.log(fraseCompleta);
// Me encanta comer pizza
//console.log(`Me encanta comer ${comida}`);

//Ejemplo 5 
let curso: string = "TypeScript";
let primeraFrase: string = 'Estoy tomando el curso de';
let finalFrase: string = 'que durará un montón'
let fraseUnida: string;
fraseUnida = `${primeraFrase} ${finalFrase}`
console.log(fraseUnida);
// Estoy tomando el curso de Typescript que durara un monton
//console.log(`Estoy tomando el curso de ${curso} que durará un montón`);
*/