var Equipment = require('../models/equipment');
// List of all Equipments
exports.equipment_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment list');
};
// for a specific Equipment.
exports.equipment_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment detail: ' + req.params.id);
};
// Handle Equipment create on POST.
exports.equipment_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment create POST');
};
// Handle Equipment delete form on DELETE.
exports.equipment_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment delete DELETE ' + req.params.id);
};
// Handle Equipment update form on PUT.
exports.equipment_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment update PUT' + req.params.id);
};
// List of all Equipments
exports.equipment_list = async function(req, res) {
    try{
    theEquipments = await Equipment.find();
    res.send(theEquipments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };