//Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

const fs = require('fs');
fs.readFile('text.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return

    }
    //console.log(data)
    let change = data.replace(data,'nouveau texte')
fs.writeFile('text.txt',change,'utf-8',(err) =>{
    if(err)
        console.log(err)
        return
})
     console.log(change)
})