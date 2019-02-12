import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component<IFormProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  public handleChange = (e: ChangeEvent<any>): void =>
    this.setState({ [e.target.name]: e.target.value });

  public handleSubmit = (e: any): void => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  render(): JSX.Element {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id=""
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <textarea
              name="body"
              id=""
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

interface IFormProps {
  title: any;
  body: any;
  createPost({}): any;
}

export default connect(
  null,
  { createPost }
)(PostForm);
