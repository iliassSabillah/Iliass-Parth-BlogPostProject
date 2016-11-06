import React from 'react';
import {Link} from 'react-router';

//Post component that displays the title, author and body of the post
const Post = React.createClass({
  render: function() {
    return (
      <div>
        <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
        <p>{this.props.post.author}</p>
        <p>{this.props.post.text}</p>
      </div>
    );
  }
});

export default Post;