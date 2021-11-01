//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
// const {Country} = conn.models;

// Syncing all the models at once.


conn.sync({ force: true }).then(async() => {
  try{
    let resDb = await Country.findAll()
    if(resDb.length === 0) {
      try{
        let response = await axios.get('https://restcountries.com/v3.1/all')
        let api = response.data
        api && api.map(async el => await Country.findOrCreate({
          where:{
            id: el.cca3,
            name: el.name.common,
            flag: el.flags.png,
            continent: el.continents ? el.continents[0] : 'Continents not found',
            capital: el.capital ? el.capital[0] : 'Capital not found',
            subregion: el.subregion ? el.subregion : 'Subregion not found',
            area: el.area,
            population: el.population || 0
          }
        }))
      }catch (err){
        console.error(err)
      }
    }
  }catch(err){
    console.error(err)
  }


  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
