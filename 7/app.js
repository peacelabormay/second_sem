const express = require('express');

const app = express();

const models = require('./routes/posts-routes');
const delayed_models = require('./routes/delayed-posts-routes');


const PORT = 3000;

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//app.use('/style', express.static(`public`));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res
    .status(200)
    .send(`<h1>Hello, Express</h1>
    <h2>url: ` + req.baseUrl + `</h2><h3>method: ` + req.method + `</h3>`);
})

app.use(models);
app.use(delayed_models);

app.use((req, res) => {
    res
      .status(404)
      .send('<h1>Error</h1>');
  });