console.log('bienvenue dans votre histoire choisissez bien les choix que vous prendrez il auront un impact sur votre aventure.');

const readline = require('readline');
const name = readline.createInterface(process.stdin,process.stdout);

name.question('Quelle est votre nom?  ', function(name){
    console.log('bonjour '+name+' ton voyage commence ici!');
});
 
const prompt = require('prompt');

prompt([
  { name: 'type',
    type: 'list',                     // (1)
    message : 'Souhaites-tu commencer ton aventure? ',
    choices: [                        // (2)
      'Je quitte mon job',
      'Je pars en vacances',
      'Japprends Node.js',
    ]
  }
]);
