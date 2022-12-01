const empleado = require('../components/empleado/interface')
const pais = require("../components/pais/interface")
//const cliente = require('../components/cliente/interface')

const routes = function(server) {
    server.use('/empleado', empleado)
    server.use('/pais', pais)
}

module.exports = routes