//Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.
const fs = require('fs');

fs.appendFile('nouveaufichier','utf-8',(err) =>{ 
    if(err) {
        consolg.log(err)
        return
    }
    fs.writeFile('nouveaufichier','salut',(err) =>{
        if(err)
            console.log(err)
            return
    })
    console.log()

     }
)