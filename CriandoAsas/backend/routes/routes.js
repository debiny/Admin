

const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')

router.post('/user',userController.create);

router.post('/family', async (req, res) => {
    let body = req.body;
    try {
        //await database.save();
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send('Erro ao cadastrar usuario');
    }
});


 
module.exports = router;