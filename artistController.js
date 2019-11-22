const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let ArtistModel = require('./dbModels/artist.model');

router.get('/',(req,res)=>{
    //This get route will return all the artists as json if exists
    ArtistModel.find(
         (err,doc)=>{
             res.json(doc);
         }
    );
});

router.post('/add',(req,res)=>{
    //This post route adds a new Artist
    //console.log(req.body);
    let artistModel = new ArtistModel({
        firstName:req.body.first_name,
        middleName:req.body.middle_name || '',
        lastName:req.body.last_name,
        stageName:req.body.stage_name,
        genre:req.body.genre_list,
        dob:req.body.dob
    });

    artistModel.save((err,doc)=>{
        if(err){
            console.log(err);
            res.sendStatus(503);
        }
        else{
            res.json({
                "response":"Successfully added the artist",
                "object added":doc
            });
        }
    })
});

router.get('/:id',(req,res)=>{
    console.log('The following artist id is requested:'+req.params.id);
    ArtistModel.find(
        {_id:req.params.id},
        (err,doc)=>{
            if(!doc){
                res.send('No artist found by that id');
            }
            res.json(doc);
        }
   );
});

module.exports = router;

