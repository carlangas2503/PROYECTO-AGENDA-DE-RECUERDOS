const { Router } = require('express');
const server = require('./allRoutes')

const router = Router();

router.use('/',server);


module.exports = router;