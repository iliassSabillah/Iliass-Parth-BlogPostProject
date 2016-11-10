import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const CreateComment = React.createClass({
  getInitialState() {
    return {
      username: '',
      text: '',
      rating: '',
      date: Date.now()
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
        rating: this.state.rating,
        data: this.state.date
      }
    })
  },
  render: function() {
    return (
    
      <form>
        <h1>Add Comments:</h1>
        <label>Username: </label>
        <input onChange={this.handleChange.bind(this, 'username')} type="text" name="username" />
        <br/>
        <br/>
        <label>Comment: </label>
        <input onChange={this.handleChange.bind(this, 'text')} type="text" name="text" />
        <br/>
        <label>Rating: </label>
        <input onChange={this.handleChange.bind(this, 'rating')} type="text" name="rating" />
        <br/>
        <br/>
        <Link to="/new-comments"><input onClick={this.sendCommentRequest} type="button" value="Send a comment" /></Link>
      </form>
    )
  }
})

export default CreateComment;