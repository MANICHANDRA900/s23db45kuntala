const mongoose = require("mongoose")
const equipmentSchema = mongoose.Schema({
equipment_type: String,
condition: String,
quantity: Number
})
module.exports = mongoose.model("Equipment",
equipmentSchema)