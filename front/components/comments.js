import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Comment from './Comment'



const Comments = React.createClass({
  getInitialState() {
    return {comments: []}
  },
  componentDidMount() {
    console.log('commentsList:',this.state.comments)
  	//Api call to get the posts from the database
    $.ajax({
      url: '/comments',
      type: 'GET'
    })
    .done((data) => {
    	console.log('ajax data from CommentsList',data)
      this.setState({comments: data});
    })
  },
  render: function() {
    return (
      <div>
      	<h1>Comments List:</h1>
        {this.state.comments.map((comment, indx) => <Comment key={indx} comment={comment} />)}
      </div>
    );
  }

});

export default Comments;







