console.log('Bienvenue dans notre quizz!!!');
const readline = require('readline');
const name = readline.createInterface(process.stdin,process.stdout);
const username = name.question('Entrer votre prénom  ',(reponse)=>{

    console.log('bonjour '+reponse+' bon courage tu en auras besoin')

});

