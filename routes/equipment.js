var express = require('express');
const equipment_controlers= require('../controllers/equipment');
var passport = require('passport');
var router = express.Router();
/* GET costumes */
router.get('/', equipment_controlers.equipment_view_all_Page );
/* GET detail costume page */
router.get('/detail', equipment_controlers.equipment_view_one_Page);
/* GET create costume page */
router.get('/create', equipment_controlers.equipment_create_Page);
/* GET create update page */
//router.get('/update', equipment_controlers.equipment_update_Page);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
 /* GET update costume page */
router.get('/update',
equipment_controlers.equipment_update_Page);
router.post('/login',passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
/* GET delete costume page */
router.get('/delete', equipment_controlers.equipment_delete_Page);
module.exports = router;