const mercadolibreService = require('../services/mercadolibreService'); 
 
function itemSearchMiddleware(req, res, next){
    const query = req.query.q;
    mercadolibreService.searchItems(query).then(function(data){
        res.locals.items = data.map(item =>{
            return {
                id: item.id,
                title: item.title, 
                price: {
                    currency:item.currency_id,
                    amount:item.available_quantity,
                    decimals: item.price
                }, 
                condition: item.condition,
                picture: item.thumbnail,
                free_shipping: item.shipping.free_shipping
            }
        });
        next();
    })
}

module.exports = itemSearchMiddleware;