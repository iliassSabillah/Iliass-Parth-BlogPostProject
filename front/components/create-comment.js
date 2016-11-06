import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const CreateComment = React.createClass({
  getInitialState() {
    return {
      username: '',
      text: '',
      likeOrDislike: '',
      date: Date.now(),
      postId:''
    }
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  sendCommentRequest() {
    let that = this
    $.ajax({
      url: '/new-comments',
      type: 'POST',
      data: {
        username: this.state.username,
        text: this.state.text,
        likeOrDislike: this.state.likeOrDislike,
        data: this.state.date,
        postId: this.state.postId
      }
    })
  },
  render: function() {
    return (
    
      <form>
        <h1>Comments:</h1>
        <label>Username: </label>
        <input onChange={this.handleChange.bind(this, 'username')} type="text" name="username" />
        <br/>
        <br/>
        <label>Comment: </label>
        <input onChange={this.handleChange.bind(this, 'text')} type="text" name="text" />
        <br/>
        <label>Like Or Dislike: </label>
        <input onChange={this.handleChange.bind(this, 'likeOrDislike')} type="text" name="likeOrDislike" />
        <br/>
        <br/>
        <input onClick={this.sendCommentRequest} type="button" value="Send a comment" />
      </form>
    )
  }
})

export default CreateComment;