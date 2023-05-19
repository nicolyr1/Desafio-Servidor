const index = require(".");

require('dotenv').config({path:'variables.env'});

index.set('port', 3000);
const server = index.listen(index.get('port'),() => {
    console.log("Servidor rodando na porta 3000")
});


