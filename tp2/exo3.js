//Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.
const fs = require('fs')
const http = require('http');

http.createServerte((httpRequest,httpResponse) =>{
    fs.readFile('test.txt','utf-8',(err,data) => {
        if(err){
            console.log(err)

            httpResponse.statusCode = 500;
            httpResponse.end('an error has occured.');
            return;
        }
            httpResponse.setHeader('Content-Type','text/plain')
            httpResponse.end(data);
        })
}).listen(3000, () => {
    console.log('server web listening on port 3000')
});
