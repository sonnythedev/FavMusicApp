const express = require('express');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config');
const artistController = require('./artistController');
const favSongsController = require('./favSongsController');

const server = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(dbConfig.dbUrl);

server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.use('/artists',artistController,(req,res,next)=>{
});

server.use('/favsongs',favSongsController,(req,res,next)=>{
});

server.get('/',(req,res)=>{
    console.log('Hello from Favorite Music');
    res.send('Hello from Favorite Music');
});
server.listen(PORT, ()=>{
    console.log(`Server listening on Port ${PORT}`);
})

