var express = require('express');
const equipment_controlers= require('../controllers/equipment');
var router = express.Router();
/* GET costumes */
router.get('/', equipment_controlers.equipment_view_all_Page );
/* GET detail costume page */
router.get('/detail', equipment_controlers.equipment_view_one_Page);
/* GET create costume page */
router.get('/create', equipment_controlers.equipment_create_Page);
/* GET create update page */
router.get('/update', equipment_controlers.equipment_update_Page);
module.exports = router;