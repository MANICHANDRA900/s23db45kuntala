var express = require('express');
const equipment_controlers= require('../controllers/equipment');
var router = express.Router();
/* GET costumes */
router.get('/', equipment_controlers.equipment_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', equipment_controlers.equipment_view_one_Page);
