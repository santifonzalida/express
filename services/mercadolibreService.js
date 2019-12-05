const axios = require('axios');

function searchItems(query){
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(function({data}){
            return data.results.slice(0,4);
        });
}

function searchItemById(id){
    return axios.get(`https://api.mercadolibre.com/items/${id}`);
}

function searchDescriptionById(id){
    return axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        .then(function({data}){
            return data.plain_text;
        });
}

module.exports =  {searchItems, searchItemById, searchDescriptionById};

