import React, {PropTypes} from 'react';
import $ from 'jquery';
import Post from './post';
import {Link} from 'react-router';
import CreateComment from './create-comment';
import Comments from './comments';

//PostPage that displays individual posts
const PostPage = React.createClass({
  getInitialState() {
    return {post: {}}
  },
  componentDidMount() {
    $.ajax({
      url: `/post/${this.props.params.id}`,
      type: 'GET'
    })
    .done((data) => {
      console.log('AJAX data PostPage Component', data);
      this.setState({post: data});
    })
  },
  //Api call to update a post
  // updatePost() {
  //   $.ajax({
  //     url: `/posts/${this.props.params.id}`,
  //     type: 'PUT'
  //   }) 
  //   .done((data) => {
  //     console.log('AJAX updated post data', data);
  //     this.setState({post: data});
  //   })
  // },
  render: function() {

    return this.state.post ? (
      <div>
        <h1>Individual Post:</h1>
        <Post post={this.state.post} />
        <CreateComment />
        <Comments/>
      </div>
    ) : null;
  }
});

// const postsStyle = {
//     backgroundColor: 'azure',
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     height: '100%'
// }

export default PostPage;