const { Router } = require('express');
const axios = require('axios');
const { conn } = require('../db');
const {Country} = conn.models;

const router = Router();


router.get('/', async (req, res, next) => {
    try{
        const countryApi = await axios.get('https://restcountries.com/v3.1/all')
        const filterCountryApi = await countryApi.data.map(el=> {
           return{
            id: el.cca3,
            name: el.name.common,
            image: el.flags,
            continent: el.continents,
            capital: el.capital ? el.capital[0] : 'Capital not found',
            subregion: el.subregion ? el.subregion [0] : 'Subregion not found',
            area: el.area,
            population: el.population || 0
          }
        })
        console.log(countryApi.data)
        res.send(filterCountryApi);
      }catch(error){
          next(error)
      }   
});


router.get('/', (req, res, next) =>{
    if(req.query.name){
        return Country.findAll({
            attributes : ['flag', 'name', 'continent'],
            where:{
                name:{
                [op.ilike]:`%${req.query.name}%`
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
            attributes : ['flag', 'name', 'continent']
        })
        .then(country => {
            res.send(country)
        })
    }
});



router.post('/', async (req, res, next) =>{
    try{
        const {name, image, continent, capital, subregion, area, population} = req.body;
        const newCountry = await Country.create({
            name, 
            image, 
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

//relaciono una ciudad con sus actividades
router.post('/:countryId/activity/:activityId', async (req, res, next) => {
    try{
        const {countryId, activityId} = req.params;
        const country = await Country.findByPk(countryId)
        await country.addActivity(activityId)
        res.send(200)
    }catch(error){
        next(error)
    }
});


module.exports = router;