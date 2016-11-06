//npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, browserHistory} from 'react-router'
import CSS from './app.css';
import CreatePost from './components/create-post';
import Posts from './components/posts';
import Post from './components/post';
//Components
import PostPage from './components/postPage';
import NoRoute from './components/NoRoute';
import Comments from './components/comments.js'
import createComment from './components/create-comment.js'

//home page component
const Parent = React.createClass({
  render: function() {
    return (
      <div>
      	home page
        {this.props.children}
      </div>
    );
  }

});



// const appStyles = {
//   backgroundColor: 'azure'
// }

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={Parent}>
	    <Route path="/postsList" component={Posts} />
	    <Route path="create-post" component={CreatePost} />
	    <Route path="/post/:id" component={PostPage} >
	    	<Route component={createComment} />
	    	<Route component={Comments}/>
	    </Route>
	 </Route>
	 <Route path="*" component={NoRoute} />
  </Router>,
  document.getElementById('root')
)
