var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var equipment_controller = require('../controllers/equipment');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/equipment', equipment_controller.equipment_create_post);
// DELETE request to delete Costume.
router.delete('/equipment/:id', equipment_controller.equipment_delete);
// PUT request to update Costume.
router.put('/equipment/:id', equipment_controller.equipment_update_put);
// GET request for one Costume.
router.get('/equipment/:id', equipment_controller.equipment_detail);
// GET request for list of all Costume items.
router.get('/equipment', equipment_controller.equipment_list);
module.exports = router;