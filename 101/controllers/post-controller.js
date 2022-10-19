const path = require('path');

const { addModel } = require('../models/AddModel.js');
const { selectModels } = require('../models/GetModel.js');
const createPath = require('../middlewares/create-path');

const getHome = (req, res) => {
    res
    .status(200)
    .sendFile(createPath('index'));
}

const getPosts = async (req, res) => {
    
    //console.log(posts);
    res
    .status(200)
    .sendFile(createPath('posts'));
}

const getApiPosts = async (req, res) => {
  let posts = await selectModels();
  console.log(posts);
  res
    .status(200)
    .send(JSON.stringify(posts));
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
    .sendFile(createPath('post'));
}

const addPost = (req, res) => {
    res
    .status(200)
    .sendFile(createPath('add-post'));
}

const sendPost = async (req, res, next) => {
  
  /*
    const model = {
      Name: req.body.name, 
      Description: req.body.description,
      Picture: "/" + path.basename(req.files[0].path),
    }
    try {
      await addModel(model);
      //res.sendStatus(201);
      next();
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  };
  */
  
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
    
    let data = await addModel(model)
    /*
    data
    .then ((result) => {
      res.statusCode = 200;
      res.send(result);
    })
    .catch ((error) => {
      res.statusCode = 400;
      res.send(error.message);
    })
    */
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
    getApiPosts,
    getPost,
    addPost,
    sendPost,
}