const model = require('./model')

function get_pais( filtroPais ) {
    let filtro = {}
    if (filtroPais) {
        filtro = { name: filtroPais }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_pais( pais ) {
    const objeto = new model( pais )
    objeto.save()
}

async function update_pais( pais ) {
    const objeto = await model.findOne( {name: pais.name} )
    objeto.name = pais.rename

    const resultado = await objeto.save()
    return resultado
}

async function delete_pais( name ) {
    return await model.deleteOne({name: name})
}

module.exports = {
    add: add_pais,
    get: get_pais,
    update: update_pais,
    delete: delete_pais,
}