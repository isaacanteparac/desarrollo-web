const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const req_number = {
    type: Number,
    required: true,
}

const proveedor_schema = new Schema({
    nombre: req_string,
    domicilio: req_string,
})

const producto_schema = new Schema({
    codigo: req_string,
    nombre: req_string,
    valor: req_number,
    ref_proveedor: [proveedor_schema],
})

const model = mongoose.model('Producto', producto_schema)
module.exports = model