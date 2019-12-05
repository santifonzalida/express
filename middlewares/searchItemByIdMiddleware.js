const mercadolibreService = require('../services/mercadolibreService');

function searchItemByIdMiddleware(req, res, next){
    const id = req.params.id;
    mercadolibreService.searchItemById(id)
        .then(function({data}){
            const item = {
                id: data.id,
                title: data.title, 
                price: {
                    currency:data.currency_id,
                    amount:data.available_quantity,
                    decimals: data.price
                }, 
                condition: data.condition,
                picture: data.thumbnail,
                free_shipping: data.shipping.free_shipping,
                sold_quantity: data.sold_quantity,
                description: ""
            }
            res.locals.item = item;
        }).then(function(){
            mercadolibreService.searchDescriptionById(id).then(function(description){
                res.locals.item.description = description;
                next();
            });
        })
    
} 

module.exports = searchItemByIdMiddleware;