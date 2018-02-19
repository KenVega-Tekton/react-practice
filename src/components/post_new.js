import React, { Component } from "react";
import { Field, reduxForm } from "redux-form"; // reduxForm se conecta con el reducer agregado
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

class PostNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label htmlFor="">{field.label2}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label2="Title" name="title" component={this.renderField} />
        {/* Field llama a la funcion, por eos no la invocamos. Component debe devolver jsx */}

        <Field
          label2="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label2="Post content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostNew));
