const storage = require('./storage')

function get_pais( filtr_opais ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_pais ) )
    })
}

function add_pais( pais ) {
    return new Promise((resolve, reject) => {
        storage.add( pais )
        resolve( pais )        
    })
}

function update_pais( pais ) {
    return new Promise((resolve, reject) => {
        storage.update( pais )
        resolve( pais )
    })
}

function delete_pais( pais ) {
    return new Promise((resolve, reject) => {
        storage.delete( pais )
        resolve( pais )
    })
}

module.exports = {
    get_pais,
    add_pais,
    update_pais,
    delete_pais,
}