var Equipment = require('../models/equipment');
// List of all Costumes
exports.equipment_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment list');
};
// for a specific Costume.
exports.equipment_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.equipment_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment create POST');
};
// Handle Costume delete form on DELETE.
exports.equipment_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.equipment_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment update PUT' + req.params.id);
};