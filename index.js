const fs = require('fs'); //permet de donner l'information de chercher le dossier

fs.readFile('text.txt', 'utf-8', (err,data) =>{ //recupère les informations du dossier text.txt
    if (err){
        console.log(err)
        return
    }
    console.log(data)
})
