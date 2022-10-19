const express = require('express');

const postRouters = require('./routers/post-routes');
const apiPostRouters = require('./routers/api-post-routes');
const createPath = require('./middlewares/create-path');

const app = express();

//app.use(express.static('views'));
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('configs'));
//app.set('view engine', 'ejs');

const PORT = 3000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(postRouters);
app.use(apiPostRouters);

app.use((req, res) => {
  res
    .status(404)
    .sendFile(createPath('error'));
});