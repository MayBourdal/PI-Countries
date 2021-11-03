const { Router } = require('express');
const { conn } = require('../db');
const {Country} = conn.models;
const {Op} =require('sequelize')

const router = Router();



router.get('/', (req, res, next) =>{
    if(req.query.name){
        return Country.findAll({
            attributes : ['flag', 'name', 'continent', 'id'],
            where:{
                name: {
                [Op.iLike]:`%${req.query.name}%`
                }
            }
        })
        .then(country => {
            if(country.length === 0){
                return res.send('Not country found')
            }
            res.send(country)
        })
    }else{
        return Country.findAll({
            attributes : ['flag', 'name', 'continent', 'id']
        })
        .then(country => {
            res.send(country)
        })
    }
});

router.get('/:id/', async (req, res, next) => {
    try{
        const {id} = req.params;
        const country = await Country.findByPk(id)
        res.send(country)
    }catch(error){
        next(error)
    }
});

router.post('/', async (req, res, next) =>{
    try{
        const {name, flag, continent, capital, subregion, area, population, id} = req.body;
        const newCountry = await Country.create({
            id,
            name, 
            flag, 
            continent, 
            capital, 
            subregion, 
            area, 
            population
        })
        res.status(201).send(newCountry)
    }catch (error){
        next(error)
    }
});

router.get('/', (req, res, next) =>{
    if(req.query.name){
        return Country.findAll({
            attributes : ['name', 'image', 'continent', 'capital', 'subregion', 'area', 'population'],
            where:{
                name: {
                [Op.iLike]:`%${req.query.name}%`
                }
            }
        })
        .then(country => {
            if(country.length === 0){
                return res.send('Not country found')
            }
            res.send(country)
        })
    }else{
        return Country.findAll({
            attributes :  ['name', 'image', 'continent', 'capital', 'subregion', 'area', 'population']
        })
        .then(country => {
            res.send(country)
        })
    }
});


module.exports = router;