const { Router } = require('express');
const router = Router();

//routes
router.get('/', (req,res)=>{
    const data = {
        "API":"GRANDES COMPRAS",
        "scraping" : "https://www.mercadopublico.cl/",
        "Name" : "Junior Erny",
        "Apellido" : "Aguayo Cuadros",
        "GET" : "/api/gcompras",
        "POST" : "/api/gcompras",
        "PUT" : "/api/gcompras/99999",
        "DELETE" : "/api/gcompras/99999"
    };
    res.json(data);
});

module.exports = router;