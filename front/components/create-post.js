import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

//CreatePost component that creates a new post
const CreatePost = React.createClass({
  getInitialState() {
    return {
      post: {},
      title: '',
      author:'',
      body: ''
    }
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  submitNewPost() {
    $.ajax({
      url: '/new-posts',
      type: 'POST',
      data: {
        title: this.state.title,
        author: this.state.author,
        text: this.state.body
      }
    })
  },
  render(){
    return (
      <form>
        <h1>Submit a post:</h1>
        <label>Title: </label>
        <input onChange={this.handleChange.bind(this, 'title')} type="text" name="title" />
        <br/>
        <br/>
        <label>Author: </label>
        <input onChange={this.handleChange.bind(this, 'author')} type="text" name="author" />
        <br/>
        <label>Body: </label>
        <input onChange={this.handleChange.bind(this, 'body')} type="text" name="body" />
        <br/>
        <br/>
        <Link to="/postsList"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>

      </form>
    )
  }
})

export default CreatePost;
