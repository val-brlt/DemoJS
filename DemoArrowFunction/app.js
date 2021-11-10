/* ES6 = ES2015 */
// Fonction pré-ES6

function oldAdd(a, b) {
    console.log(a + b);
    return a + b;
}

// Fonction ES6
const add = (a, b) => {
    console.log(a + b);
    return a + b;
};

// Si la fonction prend une seule ligne
const add2 = (a, b) => a + b;

// Si la fonction prend 1 paramètre
const add3 = a => a + 1;

// templates literals
const add4 = (a, b) => `${a} + ${b} = ${a + b}`;

// forEach
const numbers = [1, 2, 3, 4, 5];
console.log("ForEach :")
numbers.forEach(number => console.log(number));

// Map , retourne un tableau
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = numbers2.map(number => number * 2);

// Filter, filtre les éléments du tableau
const numbers4 = [1, 2, 3, 4, 5];
const numbers5 = numbers4.filter(number => number > 2);

console.log("Fonction ES6 :");
add(1, 2);
console.log("Fonction one line : " + add2(2, 2));
console.log("Fonction one param : " + add3(2));
console.log("Fonction template literal : " + add4(2, 2));
console.log("Map : " + numbers3);
console.log("Filter (>2) : " + numbers5);