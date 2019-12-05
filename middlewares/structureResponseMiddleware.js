function structureResponse(req, res, next){    
    if(req.query.q){
        res.locals.resultQuerySearch = {
            author: {
                name: "Santiago",
                lastname: "Fonzalida"
            },
            categories : [],
            items: res.locals.items
        }
        next();
    }else if(req.params.id){
        res.locals.resultQuerySearch = {
            author: {
                name: "Santiago",
                lastname: "Fonzalida"
            },
            item: res.locals.item
        }
        next();
    }else {
        next(error);
    }
    
}

module.exports = structureResponse;