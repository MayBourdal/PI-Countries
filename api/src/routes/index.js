const { Router } = require('express');
const activityRoutes = require('./activity');
const countryRoutes = require('./country');  
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/activity', activityRoutes)
router.use('/country', countryRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
