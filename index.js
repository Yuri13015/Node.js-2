
// ecrire une fonction qui prend un tableau de nombre en parametre et qui retourne le plus grand nombre du tableau

//tableau
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

console.log(getMaxNumbers(myArray));
