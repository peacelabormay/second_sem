const express = require('express');
const router = express.Router();

router.all('/posts', (req, res) => {
    res.send('<h1>Model list</h1>')
});

router.post('/posts', (req, res) => {
    res.send('<h1>post model in models</h1')
});

router.route('/posts/:id')
    .get((req, res) => {
        res.send(`<h1>get model ID `+ req.params["id"] + `</h1>
        <h2>url: ` + req.baseUrl + `</h2><h3>method: ` + req.method + `</h3>`)
    })
    .put((req, res) => {
        res.send(`<h1>put model ID `+ req.params["id"] + `</h1>`)
    })
    .delete((req, res) => {
        res.send(`<h1>delete model ID `+ req.params["id"] + `</h1>`)
    });

module.exports = router;