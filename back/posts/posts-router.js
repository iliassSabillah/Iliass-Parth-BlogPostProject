/////////////////////////
// Routes for getting and creating (aka posting) blog posts
/////////////////////////

const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPosts = (req, res) => {
 Post.find({}, (err, data) => {
   res.send(
     data
       .map(row => ({ title: row.title, text: row.text, key: row._id, timestamp: row._id.getTimestamp(), image1: row.image1, image2: row.image2 }))
       .sort((row1, row2) => (row1.timestamp < row2.timestamp ? -1 : 1))
   );
 })
}

//Create a new test post in database
const postPosts = (req, res) => {
  console.log('req body',req.body)
  Post.create({title: 'testing123', test: 'sucessfully created a test post'}, () => {
    console.log('post successfully created');
  })
}

//Configure router for get and post calls
router.route('/')
  .get(getPosts)
  .post(postPosts)


module.exports = router;
