const express = require('express');
const router = express.Router();

//Controllers
const TeamEn = require('../Controllers/Team_En.controller');


/************/
//Endpoints
router.get('/TeamEn',TeamEn.getTeamEn);


module.exports = router;
