const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const empleado_schema = new Schema({
    name: req_string,
})

const model = mongoose.model('Pais', empleado_schema)
module.exports = model