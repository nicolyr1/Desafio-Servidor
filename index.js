const express = require("express");
const router = express.Router();

    router.get('/',(req, res) => {
            res.sendFile(__dirname + "/views/index.html")
    });

    router.get('/contatos', (req, res) => {
        res.sendFile(__dirname + "/views/contato.html")
    });
    
    router.get('/produtos', (req, res) => {
        res.sendFile(__dirname + "/views/produto.html")
    });
    
    router.get('/catalogos', (req, res) => {
        res.sendFile(__dirname + "/views/catalogo.html")
    });
    
    router.get('/abertura/tipoDocx', (req, res) => {
        res.download('./recursos/arquivo.docx');
    });
    
    router.get('/abertura/tipoJpeg', (req, res) => {
        res.download('./recursos/arquivo.jpeg');
    });
    
    router.get('/abertura/tipoMp3', (req, res) => {
        res.download('./recursos/arquivo.mp3');
    });
    
    router.get('/abertura/tipoMp4', (req, res) => {
        res.download('./recursos/arquivo.mp4');
    });
    
    router.get('/abertura/tipoJson', (req, res) => {
        res.download('./recursos/arquivo.json');
    });
    
    router.get('/abertura/tipoMd', (req, res) => {
        res.download('./recursos/arquivo.Md');
    });
    
    router.get('/abertura/tipoPdf', (req, res) => {
        res.download('./recursos/arquivo.pdf');
    });

    router.use((req, res) => {
        res.sendFile(__dirname + '/views/404.html')
    });

const index = express();
index.use('/', router);

module.exports = index;


