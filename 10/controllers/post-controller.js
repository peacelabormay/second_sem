const path = require('path');

const { addModel } = require('../models/AddModel.js');
const { selectModels } = require('../models/GetModel.js');
const createPath = require('../middlewares/create-path');

const getHome = (req, res) => {
    res
    .status(200)
    .render(createPath('index'));
}

const getPosts = async (req, res) => {
    let posts = await selectModels();
    //console.log(posts);
    res
    .status(200)
    .render(createPath('posts'), { posts });
}

const getPost = (req, res) => {
    const post = {
        id: '1',
        name: 'cub',
        text: 'super puper11',
        picture: 'http://schoolsw3.com/images/picture.jpg',
        status: 'undelayed',
    };
    res
    .status(200)
    .render(createPath('post'), { post });
}

const addPost = (req, res) => {
    res
    .status(200)
    .render(createPath('add-post'));
}

const sendPost = async (req, res) => { 
    if (!req.body?.name || !req.files[0]?.path) {
      let error = {
        status: "error",
        message: "Не хватает данных",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }

    let model = {
      Name: req.body.name, 
      Description: req.body.description,
      Picture: "/" + path.basename(req.files[0].path),
      //Picture: filename,
    };
    
    let data = await addModel(model);
    
    if (!data) {
        let error = {
          status: "error",
          message: "Ошибка при добавлении в базу данных",
        };
        res.statusCode = 400;
        res.send(error);
        return;
    }
    
    let answer = {
      status: "ok",
      data: model,
    };
    res.statusCode = 200;
    res.send(answer);
  };


module.exports = {
    getHome,
    getPosts,
    getPost,
    addPost,
    sendPost,
}