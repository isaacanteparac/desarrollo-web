const user = require('./componentes/user/index')

const rutas = function(servidor) {
    servidor.use('/user', user)
}

module.exports = rutas