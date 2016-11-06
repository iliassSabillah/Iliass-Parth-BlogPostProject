/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model');
const commentModel = require('./comments/comments-model');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');
const path = require('path');
const rootPath = path.join(__dirname, '..');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/blog-app');

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));

//Serving up bundle.js file
app.use(express.static(`${rootPath}/bundle`));

//API
//Get all blog posts

app.get('/posts', (req, res) => {
  Post.find({}, (err, data) => {
    res.send(data);
  })
});

//Make a new post
app.post('/new-posts', (req, res) => {
  // console.log('DATA FROM AJAX:', req.body.title);
  Post.create(req.body, (err,body) => {
    console.log();
    res.send(body)
  });
});

//update a post

// app.put('/posts/:id', (req, res) => {
//     var id= req.params.id;
//     Post.findById(id, (err, data) => {
//         if(e) return res.send(500, e);
//         if(!data) return res.send(404); 
//        var update = { 
//             title : req.body.title, 
//             author : req.body.author,
//             text: req.body.body
//         }; 
//         Post.updateById(id, update, (err)=> { // 5
//               if(err) return res.send(500, err);

//         });
//     })
// });

//Get an individual post

app.get('/posts/:id',(req, res) => {
  console.log('post')
  Post.findById(req.params.id, (err, data) => {
    res.send(data);
  })
});

//Get all comments

app.get('/comments', (req, res) => {
  Comment.find({}, (err, data) => {
    res.send(data);
  })
});

//Make a new comment
// app.post('/comments', (req, res) => {
//   Comment.create(req.body);

// });

app.post('/new-comments', (req, res) => {
  // console.log('DATA FROM AJAX:', req.body.title);
  Comment.create(req.body, (err,data) => {
    res.send(data)
  });
});


//Server call that serves index.html and forwards routing to React router
app.get('/*', (req, res) => {
  res.sendFile(`${rootPath}/front/index.html`);
});


db.on('open', () => {
  console.log('db connection opened!');
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
