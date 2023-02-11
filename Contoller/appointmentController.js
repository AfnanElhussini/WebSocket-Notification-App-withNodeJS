const appointmentSchema = require('../models/appointment');
const {getIo} = require('../io');

//get all appointments
// emit > send 
// on > recieve  
exports.getAllAppointments = (request, response, next) => {
    appointmentSchema
      .find()
      .then((data) => {
        if (data != null) {
          response.status(200).json({ message: "GET All appointment", data });
        } else {
          next(new Error("appointments not found"));
        }
      })
      .catch((error) => {
        next(error);
      });
  };

//create appointment
exports.createAppointment = (request, response, next) => {
    const newAppointment = new appointmentSchema({
        name: request.body.name,
        date: request.body.date,
        time: request.body.time,
        message: request.body.message,
    });
    newAppointment
      .save()
      .then((data) => {
        const io = getIo();
        io.emit('appointment', data);
        response.status(200).json({ message: "Appointment created", data});
        
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
}
