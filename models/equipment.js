const mongoose = require("mongoose")
const equipmentSchema = mongoose.Schema({
equipment_type: String,
condition: String,
quantity: {
    type: Number,
    min: [0, 'The equipment quantity must be greater than or equal to 0'], 
    max: [70000, 'The equipment quantity cannot exceed 70000'], 
    required: [true, 'equipment quantity is required'] 
}
})
module.exports = mongoose.model("equipment",equipmentSchema)