const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res) {
    const filtro_pais = req.query.cedula || null
    controller.get_pais( filtro_pais )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.post('/', function(req, res) {
    const {name} = req.body
    const data = {name}
    controller.add_pais( data )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.put('/', function(req, res) {
    controller.update_pais( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.delete('/', function(req, res) {
    console.log(req.body.name)
    controller.delete_pais( req.body.name )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

module.exports = route