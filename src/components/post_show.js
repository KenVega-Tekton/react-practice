import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("componente montado, id :", id);
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  //
  return { post: posts[ownProps.match.params.id] };
  // no necesariamente tienes que regresar el estado o parte de el
  //   solo recuerda que lo que retornas entra como props a este componente
}

export default connect(mapStateToProps, fetchPost)(PostShow);
