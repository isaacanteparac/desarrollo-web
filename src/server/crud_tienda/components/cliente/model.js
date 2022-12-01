const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const pais_schema = new Schema({
    nombre: req_string
})

const ciudad_schema = new Schema({
    nombre: req_string,
    ref_pais: paisSchema
})

const cliente_schema = new Schema({
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    ref_ciudad: ciudad_schema,
})

const model = mongoose.model('Cliente', cliente_schema)
module.exports = model