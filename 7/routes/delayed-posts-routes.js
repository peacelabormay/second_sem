const express = require('express');
const router = express.Router();

router.all('/delayed', (req, res) => {
    res.send('<h1>Delayed models list</h1>')
});

router.post('/delayed', (req, res) => {
    res.send('<h1>post model in delayed models</h1>')
});

router.route('/delayed/:id')
    .get((req, res) => {
        res.send('<h1>Delayed model get ID</h1>' + req.params["id"])
    })
    .delete((req, response) => {
        res.send('<h1>Delayed model delete get ID</h1>' + req.params["id"])
    });

module.exports = router;