import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/index";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const postsTemp = this.props.posts;

    return Object.keys(postsTemp).map(id => {
      const post = postsTemp[id];

      return (
        <li className="list-group-item" key={id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h1>Posts</h1>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);
