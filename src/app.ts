/*
// Convertir a Mayúscula
const pais: string = 'Francia';
let paisMayuscula: string = pais.toUpperCase();

console.log({pais, paisMayuscula});


// Convertir a String 
let edad:number = 64;
let edadString: string;
edadString = edad.toString();
console.log({edad, edadString});




// quitar espacios de una cadena al final trimEnd();
// quitar espacios de una cadena al principio trimStart(); 

//quitar espacios sobrantes:
let nombre: string = 'Keila Jireh             ';
nombre = nombre.trim().toUpperCase();
//nombre = nombre.toUpperCase();
console.log({nombre});


//Índice(index) de un String - indíce y longitud(length)
let smartPhone: string = 'iPhone';
let longitud: number = smartPhone.length;
//¿Cual es la ultima longitud? 
let character: string = smartPhone[longitud-1];
console.log({smartPhone, character, longitud});



// Reemplaza una palabra en una cadena por otra - METODO replace()
let smartPhone2: string = 'motorola g30';

// el 1° valor dentro del () es el valor anterior dentro de la cadena de string o el que vamos a buscar
// el 2° valor dentro del paréntesis es por el que se va a reemplazar
smartPhone2 = smartPhone2.replace('g30', 'g6');
console.log({smartPhone2}); 

let oracion: string = `tigre comia trigo en un trigal, 
que triste tigre`
/*oracion = oracion.replaceAll('tigre', 'perrito');
console.log({oracion});
*/
/*
// MÉTODO substring() - Extrae un segmento de la cadena con un inicio y un fin
oracion = oracion.substring(0, 46);
console.log({oracion});

// MÉTODO search()
let indice: number = oracion.search(',');
oracion = oracion.substring(0, indice);
console.log(oracion);
*/

let cuento: string = `      en el tranquilo bosque viví@          un erizo llamado spike. 
un dí@, descubrió un claro mágico lleno de luciérnagas. 
bailaron juntos         bajo la lun@, llenando su cor@zón de alegría. desde entonces, 
spike recordaba la magia de la @mistad cada noche.         `;

cuento = cuento.trim().replace(/\s+/g, ' ').replaceAll('@', 'a').replaceAll('spike', 'SPIKE');

//let indice: number = cuento.search('.');

//obtiene los caracteres de una cadena charAt();

console.log(cuento);