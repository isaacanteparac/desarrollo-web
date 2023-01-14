const express = require('express')
const respuesta = require('../../network/response')
const controlador = require('./controlador')

const ruta = express.Router()

ruta.get('/', function(req, res) {
    const filtroUser = req.query.cedula || null
    controlador.obtenerUsers( filtroUser )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.post('/', function(req, res) {
    controlador.agregarUser( req.body )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.patch('/', function(req, res) {
    controlador.actualizarUser(req.body)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.delete('/', function(req, res) {
    controlador.eliminarUser(req.body.abreviatura)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

module.exports = ruta