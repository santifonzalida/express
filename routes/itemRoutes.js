const { Router } = require('express');
const validateQueryParamMiddleware = require('../middlewares/validateQueryParamMiddleware');
const itemSearchMiddleware = require('../middlewares/itemsSearchMiddleware');

const searchItemByIdMiddleware = require('../middlewares/searchItemByIdMiddleware');

const structureResponseMiddleware = require('../middlewares/structureResponseMiddleware');

const itemRouter = new Router();

itemRouter.get('/',validateQueryParamMiddleware, itemSearchMiddleware, structureResponseMiddleware, function(req,res){
    res.json(res.locals.resultQuerySearch);
});

itemRouter.get('/:id',validateQueryParamMiddleware, searchItemByIdMiddleware, structureResponseMiddleware, function(req,res){
    res.json(res.locals.resultQuerySearch);
});

module.exports = itemRouter;