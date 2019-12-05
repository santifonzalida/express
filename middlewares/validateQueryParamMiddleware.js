function validateQueryMiddleware(req, res, next){
    const queryParam = req.query.q || req.params.id;
    if(queryParam){
        next();
    }else {
        //console.log(`Error at ${req.originalUrl}`);
        //console.log(`Error: ${error.toString()}`);
        res.send('Error: parametro requerido');
    }
}

module.exports = validateQueryMiddleware;