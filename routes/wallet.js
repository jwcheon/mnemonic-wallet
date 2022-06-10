const express = require('express');
const router = express.Router();
const lightwallet = require("eth-lightwallet");
const fs = require('fs');

// TODO : use lightwallet module to create random mnemonic code
router.post('/newMnemonic', async(req,res) => {
    let mnemonic;
    try {
        mnemonic = lightwallet.keystore.generateRandomSeed();
        res.json({mnemonic});
    } catch(err) {
        console.log(err);
    }
});


// TODO : use mnemonic code and password to create keystore & address
router.post('/newWallet', async(req, res) => {

});

module.exports = router;