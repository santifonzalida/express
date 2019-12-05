const express = require('express');
const {itemRoutes} = require('./routes');
const app = express();

app.use('/api/items', itemRoutes);
//app.use('/', viewRoutes) TODO: MANEJAR VISTAS DESDE EL SERVIDOR

app.listen(3000, function(){
    console.log("Server up on port 3000");
});