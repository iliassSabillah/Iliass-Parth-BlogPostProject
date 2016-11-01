const mongoose = require('mongoose');
const express = require('express');
const app = express();
const postModel = require('./models/posts-model.js');
// const usersModel = require('./models/users-model.js');
const Post = mongoose.model('Post');
// const Users = mongoose.model('Users');

// Connect to database and start server:
// (whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');
//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
app.get('/',(req,res)=>{
	res.send('Hey from the home page');
});
app.get('/posts',(req,res)=>{
	Post.create({title: 'test post 2'},(err,data)=>{
		if(err) console.log('Error loading post')
		else console.log('Post created')
	});
	res.send('Hey from the Post page');
});

app.get('/users',(req,res)=>{
	Post.create({name: 'iliass',email:'iliass24@gmail.com',password:'fjdl'},(err,data)=>{
		if(err) console.log('Error loading Users')
		else console.log('user created')
	});
	res.send('Hey from the Users page');
});

db.on('open', () => {
	console.log('connected to database')
	app.listen(3000, () => {
		console.log('App listening on port 3000');
		//create a data entry to the database
		Post.find({}, (err,data)=>{
			console.log('database data found',data);
		});
	});
});