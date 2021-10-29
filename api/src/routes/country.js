const { Router } = require('express');
const { conn } = require('../db');
const {Country} = conn.models;
const {Op} =require('sequelize')

const router = Router();



router.get('/', (req, res, next) =>{
    if(req.query.name){
        return Country.findAll({
            attributes : ['flag', 'name', 'continent'],
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
            attributes : ['flag', 'name', 'continent']
        })
        .then(country => {
            res.send(country)
        })
    }
});

router.get('/:countryId/', async (req, res, next) => {
    try{
        const {countryId} = req.params;
        const country = await Country.findByPk(countryId)
        res.send(country)
    }catch(error){
        next(error)
    }
});

// router.post('/', async (req, res, next) =>{
//     try{
//         const {name, image, continent, capital, subregion, area, population} = req.body;
//         const newCountry = await Country.create({
//             name, 
//             image, 
//             continent, 
//             capital, 
//             subregion, 
//             area, 
//             population
//         })
//         res.status(201).send(newCountry)
//     }catch (error){
//         next(error)
//     }
// });

//relaciono una ciudad con sus actividades


module.exports = router;