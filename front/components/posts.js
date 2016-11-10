import React from 'react';
import Post from './post.js';
import $ from 'jquery';

//Posts page that displays all the added posts from the database


// THE POSTS COMPONENT -----------------------------------------------------------------------------------------
var Posts = React.createClass({
  getInitialState() {
    return {posts: []}
  },
  componentDidMount() {
    //Api call to get the posts from the database
    $.ajax({
      url: '/posts',
      type: 'GET'
    })
    .done((data) => {
      console.log('ajax data from PostsList',data)
      this.setState({posts: data});
    })
  },
  render: function() {
    return (
      <div>
        <div className="postsHeader">
          <center><h1 id="poststitle">Read our Blogs</h1></center>
          <hr id="posthr" />
          <center><h3 id="createyourown"><em>Create your own!</em></h3></center>
          {this.state.posts.map((post, indx) => <Post key={indx} post={post} />)}
        </div>



      </div>
    )
  }
})

export default Posts;

// const Posts = React.createClass({
//   getInitialState() {
//     return {posts: []}
//   },
//   componentDidMount() {
//   	//Api call to get the posts from the database
//     $.ajax({
//       url: '/posts',
//       type: 'GET'
//     })
//     .done((data) => {
//     	console.log('ajax data from PostsList',data)
//       this.setState({posts: data});
//     })
//   },
//   render: function() {
//     return (
//       <div>
//       	<h1>Posts:</h1>
        
//       </div>
//     );
//   }

// });
