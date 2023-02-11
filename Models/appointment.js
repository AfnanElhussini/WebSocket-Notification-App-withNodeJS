const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: { type: String},
    date: { type: String },
    time: { type: String },
    message: { type: String }
});
module.exports= mongoose.model('Appointment', appointmentSchema);