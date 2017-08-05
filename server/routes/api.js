const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db="mongodb://localhost:27017/mydatabase"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!"+err);
    }
});

router.get('/videos',function(req,res){
    Video.find({})
    .exec(function(err, videos){
        if(err){
            console.log(err);
        }else{
            res.json(videos);
        }
    })
});

router.get('/videos/:id',function(req,res){
    Video.find(req.params.id)
    .exec(function(err, videos){
        if(err){
            console.log(err);
        }else{
            res.json(videos);
        }
    })
});

router.post('/videos',function(req,res){
    var newvid = new Video();
    newvid.title = req.body.title;
    newvid.url = req.body.url;
    newvid.description = req.body.description;
    newvid.save(function(err, video){
        if(err){
            console.log(err);
        }else{
            res.json(video);
        }
    })
});

router.put('/videos/:id',function(req,res){
    Video.findByIdAndUpdate(req.params.id,
    {
        $set:{
            title: req.body.title,
            url: req.body.url,
            description: req.body.description,
        }
    },
    {
        new:true
    },
    function(err,updateVideo){
        if(err){
            console.log(err);
        }else{
            res.json(updateVideo);
        }
    }
    );
});

router.delete('/videos/:id',function(req,res){
    Video.findByIdAndRemove(req.params.id,
    function(err,deletedVideo){
        if(err){
            console.log(err);
        }else{
            res.json(deletedVideo);
        }
    }
    );
});

module.exports = router;