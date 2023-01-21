const router = require('express').Router();
const db = require('../db.json');

router.get('/cookie-jar', (req, res) => {
    // console.log(req.cookies);

    res.cookie('cart', [
        {"item": 'milk', "price": 1.79},
        {"item": 'cheese', "price": 2.99},
        {"item": 'dog food', "price": 9.98},
    ]); // Setting some cookie data for our GET request

    const check = req.cookies;
    console.log(check.cart);

    let offer;

    check.cart.every(obj => {
        offer = db.filter(i => i.item == obj.item && i.price < obj.price)
        
        if(offer.length > 0) return false;
    
        // offer = undefined;
        return true;
    });

    console.log(offer);

    // if(offer) {
    if(offer.length > 0) {
        res.send({
            offer: `Our ${offer[0].item} if ${offer[0].price}!`,
            cookies: check
        });
    } else {
        res.send({
            cookies: check
        });
    }

    // res.send(check);
});

module.exports = router;