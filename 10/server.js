const express = require('express');
const path = require('path');

const { addModel } = require('./supabaseService.js');
const { upload } = require('./fileFilter.js');
/*
import express from "express";

import path from "path";
import supabaseService from "./supabaseService.js";
import fileFilter from "./fileFilter.js";
*/
const app = express();

app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('configs'));
app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
/*
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

app.get('/', (req, res) => {
    const posts = [
        {id: '1', name: 'cub', description: 'super puper cub', picture: 'http://schoolsw3.com/images/picture.jpg', author: 'me', status: 'undelayed'},
        {id: '1', name: 'cub', description: 'super puper cub', picture: '/heh.png', author: 'me', status: 'undelayed'},
    ];
    res
    .status(200)
    .render(createPath('posts'), { posts });
})

app.get('/posts', (req, res) => {
    const posts = [
        {id: '1', name: 'cub', description: 'super puper cub', picture: '../images/heh.png', author: 'me', status: 'undelayed'},
        {id: '1', name: 'cub', description: 'super puper cub', picture: '../images/heh.png', author: 'me', status: 'undelayed'},
    ];
    res
    .status(200)
    .render(createPath('posts'), { posts });
})

app.get('/posts/:id', (req, res) => {
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
})

app.get('/add-post', (req, res) => {
    res
    .status(200)
    .render(createPath('add-post'));
});

app.post("/create", upload, async (req, res) => { 
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
      Picture: req.files[0].path
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
  });

app.use((req, res) => {
  res
    .status(404)
    .render(createPath('error'));
});