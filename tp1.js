//-1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

//numberOne est un parametre (ou un argument) dela fonction sum
//entre les accolades se trouve le coprs de la fonction, c'est la qu'est
//stocke la logique de la fonction
function square (numberOne, numberTwo){
    return number + number;
}
//console.log(number);












//- 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.


const myArray = [23423,33243,234234,34343434,2525252525,45454545,42562];

//numbers: an array of number

function getMaxNumbers(numbers) {
    let max = numbers [0]; // on declare une variable max on l'initialise avec numbers(0)
   //on parcourt le tableau numbers avec une boucle for 
    for (let i = 0; i < numbers.length;i++) {
        if(numbers[i]>max){
            max = numbers[i];
        } 
   }
   return max;
}

//console.log(getMaxNumbers(myArray));









//- 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

function removeLetter(str) {
    return str.replace(/[aeiouy]/gi,"");
}
//console.log(removeLetter("salut"));









//- 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

const meArray = ['b','d','c','a'];

function order(arr){
    return arr.sort()
}
//console.log(order(meArray));







//- 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

/*function change(int){
    const chiffre = ['un','deux','trois','quatre','cinq','six','sept','huit','neuf']
    if
    
}
//console.log(change(test));*/






//- 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

function returnobj(objects, propertyName) {
    let values = [];
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        values.push(object[propertyName]);
    }

    return values;
}
let objects = [
    { firstname: "Yuri", lastname: "Guemra", age: 23 },
    { firstname: "Achille", lastname: "Dum", age: 23 },
];
//console.log(returnobj(objects, "firstname"));
//console.log(returnobj(objects, "age"))










//- 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
const decroissant = [1,2,3,4,5,6,7,8,9];

function disorder(arr){
    arr.sort()
    return arr.reverse()
}
//console.log(disorder(decroissant));










//- 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

const majuscules = ('salut');

function maj(str){ 
let mySentence = "";

for (let i = 0; i < str.length; i++) {
    const regex = /[aeiouy]/i;
    if (regex.test(str[i])) {
        mySentence += str[i].toUpperCase();
    } else {
        // si non, nous remettons la lettre comme elle l'était dans la variable mySentence
        mySentence += str[i];
    }
}
return mySentence;
}

//console.log(maj(majuscules));










//- 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

function num(str){
        let myVoyelles = "";
    
        for (i = 0; i < str.length; i++) {
            const regex = /[aeiouy]/i;
    
            if (regex.test(str[i])) {
                myVoyelles += str[i];
            }
        }
        return " la phrase compte " + myVoyelles.length + " voyelles";
    }
//console.log(num('salut'));






//- 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

function consMaj(str) {
    let mySentence = "";
    for (let i = 0; i < str.length; i++) {
        const regex = /[bcdfghjklmnpqrstvwxyz]/i;
        if (regex.test(str[i])) {
            mySentence += str[i].toUpperCase();
        } else {
            mySentence += str[i];
        }
    }
    return mySentence;
}

console.log(consMaj("salut"));