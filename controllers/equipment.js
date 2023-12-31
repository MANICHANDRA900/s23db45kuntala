var equipment = require('../models/equipment');
// List of all Equipments
exports.equipment_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Equipment list');
};
// for a specific Equipment.
exports.equipment_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await equipment.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.equipment_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await equipment.findById( req.params.id)
    // Do updates of properties
    if(req.body.equipment_type)
    toUpdate.equipment_type = req.body.equipment_type;
    if(req.body.condition) toUpdate.condition = req.body.condition;
    if(req.body.quantity) toUpdate.quantity = req.body.quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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

   // Handle Costume delete on DELETE.
exports.equipment_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await equipment.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.equipment_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await equipment.findById( req.query.id)
    res.render('equipmentdetail',
   { title: 'equipment Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.equipment_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('equipmentcreate', { title: 'equipment Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.equipment_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await equipment.findById(req.query.id)
    res.render('equipmentupdate', { title: 'equipment Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.equipment_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await equipment.findById(req.query.id)
    res.render('equipmentdelete', { title: 'equipment Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   