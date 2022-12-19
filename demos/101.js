// ejemplos de Strings
const role = "Teacher";

// esto va a petar
/* 
    peta porque role está definido como constante, y por lo tanto, no puede redefinirse:
    role = 'Student'
*/
console.log(role);

// BEST PRACTICES:
// mejor usad camelCase para variables y funciones, pero también podéis usar snake_case
// para constantes podéis usar también MAYUS_CASE
const TEACHER_NAME = "Jordi";

// esto peta porque aún no ha sido definido!!
//console.log(phrase1)

// usamos + para concatenar strings
let phrase1 = "The name of the teacher is " + TEACHER_NAME + " and is instructing JS";
// o usar backticks ` para usar la interpolación
let phrase2 = `The name of the teacher is ${TEACHER_NAME} $ {} and is instructing JS`;

console.log("phrase1", phrase1);
console.log("phrase2", phrase2);
console.log("phrase1 !== phrase2", phrase1 !== phrase2);

// esto no funciona, las variables empiezan con un caracter
// let 3coches = ['audi', 'bmw', 'vw']
let coches3 = ["audi", "bmw", `vw`];

// let mouseItem : { -----> peta porque no podemos usar : para asignar un valor a una variable
let mouseItem = {
    name: "MagicMouse",
    //name = 'MagicMouse', // ----> peta porque para asignar un valor a una propiedad debemos usar :
    units: 22,
    price: 99,
    OS: ["Windows", "Linux", "Mac"], // para arrays []
};
let keyboardItem = {
    name: "QWERTY",
    units: 23,
    price: 29.9,
    ISOCode: "ES",
    OS: ["Windows", "Linux", "Mac"], // tenemos que usar , para delimitar más de un elemento
    compatibleWith: {
        // para objetos {}
        mouse: mouseItem,
    },
    coches3, // propiedad coches3 y valor: ["audi", "bmw", "vw"], es lo mismo que coches3: coches3
};
console.log(keyboardItem.coches3);
/*
JSON
{
    "name": "QWERTY",
    "units": 23,
    "price": 29.9,
    "ISOCode": "ES",
    "OS": ["Windows", "Linux", "Mac"],
    "compatibleWith": {
        "mouse": {
            "name": "MagicMouse",
            "units": 22,
            "price": 99,
            "OS": ["Windows", "Linux", "Mac"]
        }
    }
}
*/
// usamos . para poder acceder a nodos del objeto
console.log("Available units", keyboardItem.units > 0);
console.log("Units of mouse compatible with keyboardItem", keyboardItem.compatibleWith.mouse.units);
// devuelve undefined porque efectivamente no existe esta propiedad en el objeto
console.log("Mouse item has ISOCode ??? ", mouseItem.ISOCode);

if (keyboardItem.units > 0) {
    console.log("Tenemos unidades!");
} else {
    console.log("OUT OF STOCK!");
}

// es falso porque coches3 es un valor no primitivo
console.log('coches3 == ["audi", "bmw", "vw"]', coches3 == ["audi", "bmw", "vw"]);
// coches3[0] == 'coches3[0]' // aquí 'coches3[0]' es un string!!!
console.log("coches3[0] is audi", coches3[0] === "audi");
console.log("coches3[1] is bmw", coches3[1] === "bmw");
console.log("coches3[2] is vw", coches3[2] === "vw");
console.log("what is coches3[3]", coches3[3]); // como no existe el cuarto elemento, devuelve undefined

// Podemos alterar el contenido de un objeto
console.log("keyboardItem.ISOCode", keyboardItem.ISOCode);
keyboardItem.ISOCode = "IT";
console.log("keyboardItem.ISOCode", keyboardItem.ISOCode);

// también podemos alterar el contenido de un array
console.log("coches3[2] is vw", coches3[2] === "vw");
coches3[2] = "seat";
console.log("coches3[2] is seat", coches3[2] === "seat");
coches3[2] = 23;
console.log("coches3[2] is 23", coches3[2] === 23);

// arrays cualquier tipo de objeto: [undefined, null, 1, true, NaN, Infinity, 'hola', {}]
const cualquierArr = [undefined, null, 1, true, NaN, Infinity, "hola", {}];
// el array es una colección de elementos, accesibles por un número []
console.log("cualquierArr[5]", cualquierArr[5] === 1 / 0);
// el objeto es una lista de propiedades, accesibles por nombre
// {Mixed}

// keyboardItem.OS = ["Windows", "Linux", "Mac"]
for (let os of keyboardItem.OS) { 
    // nos permite recorrer el array, de manera que os adquirirá los valores de dentro del array por cada iteración
    if (os === "Windows") {
        console.log("Es windows!");
    } else if (os === "Linux") {
        console.log("Es Linux!");
    } else {
        console.log("No es ni windows ni linux!");
    }
}

// reescritura de los if-else if-else con switch
for (let os of keyboardItem.OS) {
    switch(os) {
        case 'Windows':
            console.log("Es WINDOWS!");
            break;
        case 'Linux': 
            console.log("Es LINUX!");
            break;
        default:
            console.log("No es ni WINDOWS ni LINUX!");
            break;
    }
}
