import React from 'react';
import Post from './post.js';
import $ from 'jquery';

//Posts page that displays all the added posts from the database

const Posts = React.createClass({
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
      	<h1>Posts:</h1>
        {this.state.posts.map((post, indx) => <Post key={indx} post={post} />)}
      </div>
    );
  }

});

export default Posts;
