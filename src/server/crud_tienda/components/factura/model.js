const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_date = {
    type: Date,
    required: true,
}

const req_number = {
    type: Number,
    required: true,
}

const factura_detalle_schema = new Schema({
    ref_producto: {
        type: Schema.ObjectId,
        ref: 'Producto',
    },
    cantidad: req_number,
    valor_x_cantidad: req_number,
}, {
    timestamps: true,
})

const factura_schema = new Schema({
    ref_empleado: {
        type: Schema.ObjectId,
        ref: 'Empleado',
    },
    ref_cliente: {
        type: Schema.ObjectId,
        ref: 'Cliente',
    },
    fecha_emision: req_date,
    valor_subtotal: req_number,
    valor_iva: req_number,
    valor_total: req_number,
    ref_factura_detalle: [factura_detalle_schema]
}, {
    timestamps: true,
})

const model = mongoose.model('Factura', factura_schema)
module.exports = model