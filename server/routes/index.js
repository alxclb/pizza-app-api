const express = require('express');
const db = require('../db')
const router = express.Router();

router.get('/', async (req, res, next) => {
    
        try{
            let results = await db.all(); let buff=results.link
            res.json(results);
        } catch(err){
            console.log(err);
            res.sendStatus(500);
        }

});

module.exports = router;

// function arrayBufferToBase64(buffer) {
//     var binary = '';
//     var bytes = [].slice.call(new Uint8Array(buffer));
//     bytes.forEach((b) => binary += String.fromCharCode(b));
//     return window.btoa(binary);
// };