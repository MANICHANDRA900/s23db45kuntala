var equipment = require('../models/equipment');
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
    theequipment = await equipment.find();
    res.send(theequipment);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// VIEWS
// Handle a show all view
exports.equipment_view_all_Page = async function(req, res) {
    try{
        equipment = await equipment.find();
    res.render('equipment', { title: 'equipment Search Results', results: equipment });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
   exports.equipment_create_post = async function(req, res) {
   console.log(req.body)
   let document = new equipment();
   // We are looking for a body, since POST does not have query parameters.
   // Even though bodies can be in many different formats, we will be picky
   // and require that it be a json object
   // {"costume_type":"goat", "cost":12, "size":"large"}
   document.equipment_type = req.body.equipment_type;
   document.condition = req.body.condition;
   document.quantity = req.body.quantity;
   try{
   let result = await document.save();
   res.send(result);
   }
   catch(err){
   res.status(500);
   res.send(`{"error": ${err}}`);
   }
   };
   