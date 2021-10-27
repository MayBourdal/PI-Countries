const { Router } = require('express');
const { conn } = require('../db');
const {Activity} = conn.models;

const router = Router();

router.get('/', async (req, res, next) =>{
    try{
        const newActivity = await Activity.findAll()
          res.send(newActivity)
    }catch(error){
        next(error)
    }
});

router.post('/', async (req, res, next) =>{
    try{
        const {name, difficulty, duration, season} = req.body;
        const newActivity = await Activity.create({
            name, 
            difficulty, 
            duration, 
            season
        })
        res.status(201).send(newActivity)
    }catch(error){
        next(error) 
    }
});

module.exports = router;