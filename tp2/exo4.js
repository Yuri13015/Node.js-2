
//Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.
const fs = require('fs');

fs.readdir('tp2','utf-8',(err,files) => {
    console.log(files)
})

