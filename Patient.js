const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  patientId: String ,
  patientName: String,
  phoneNo: String
})

const PatientModel = mongoose.model("Patient", PatientSchema)
module.exports = PatientModel
