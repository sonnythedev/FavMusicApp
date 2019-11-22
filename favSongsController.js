const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let FavSongModel = require('./dbModels/favoriteSong.model');

router.get('/',(req,res)=>{
    console.log('all the favorite songs')
    FavSongModel.find(
         (err,doc)=>{
             res.json(doc);
         }
    );
});

router.post('/add',(req,res)=>{
    //console.log(req.body);
    let favSongModel = new FavSongModel({
        title:req.body.title,
        album:req.body.album,
        year:req.body.year,
        genre:req.body.genre_list,
        artistId:req.body.artist_id
    });

    favSongModel.save((err,doc)=>{
        if(err){
            console.log(err);
            res.sendStatus(503);
        }
        else{
            res.json({
                "response":"Successfully added the song",
                "object added":doc
            });
        }
    })
});

router.get('/:id',(req,res)=>{
    //console.log('The following song id is requested:'+req.params.id);
    FavSongModel.find(
        {_id:req.params.id},
        (err,doc)=>{
            if(!doc){
                res.send('No song found by that id');
            }
            res.json(doc);
        }
   );
});

module.exports = router;

