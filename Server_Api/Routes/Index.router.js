const express = require('express');
const router = express.Router();

const TeamEn = require("../Controllers/Team_En.controller");


router.get('/getTeamEn/:id', TeamEn.getTeamEn);
// router.get('/getTeamEn/:id', TeamEn.getTeamEn);
router.get('/allTeamsEn', TeamEn.getTeamEnList);
router.delete('/Delete/:id', TeamEn.RemoveDealDetails);


module.exports = router;
