const user = require('../components/user/interfaz')


const rutas = function(servidor) {
    servidor.use('/user', user)
}

module.exports = rutas