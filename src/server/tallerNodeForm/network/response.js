
exports.success = (req, res, message) =>{
    res.status(200).send({body: message, error:''})
}

exports.error = (req, res, message) => {
    res.status(500).send({body: '', error:message})
}