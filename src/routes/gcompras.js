const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const gcompras = require('../scraping/mp.json');
//console.log(gcompras);
router.get('/',(req, res) =>{
    res.json(gcompras);
});

router.post('/',(req, res) =>{
    //console.log(req.body);
    const {ID, Nombre_Gran_Compra, Comprador, Fecha_Inicio, Fecha_Fin, Estado} = req.body;
    if(ID && Nombre_Gran_Compra && Comprador && Fecha_Inicio && Fecha_Fin && Estado){
        const newGCompra = {...req.body};
        //console.log(newGCompra);
        gcompras.push(newGCompra);
        res.json(gcompras);
    }
    else{
        res.send('wrong Request');
    }
});

router.put('/:id',(req,res) =>{
    const { id } = req.params;
    const {ID, Nombre_Gran_Compra, Comprador, Fecha_Inicio, Fecha_Fin, Estado} = req.body;
    if(ID && Nombre_Gran_Compra && Comprador && Fecha_Inicio && Fecha_Fin && Estado){
        _.each(gcompras, (gcompra,i) =>{
            if(gcompra.ID==id){
                gcompra.Nombre_Gran_Compra = Nombre_Gran_Compra;
                gcompra.Comprador = Comprador;
                gcompra.Fecha_Inicio = Fecha_Inicio;
                gcompra.Fecha_Fin = Fecha_Fin;
                gcompra.Estado = Estado;
            }
        });
        res.json(gcompras);
    }
    else{
        res.send('wrong Request');
    }
});

router.delete('/:id',(req,res) =>{
    const { id } = req.params;
    //console.log(req.params);
    _.each(gcompras, (gcompra,i) =>{
        if(gcompra.ID==id){
            gcompras.splice(i,1);
        }
    });
    res.json(gcompras);
})
module.exports = router;