import React, { Component, ChangeEvent } from "react";

export default class PostForm extends Component<IFormState, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  public PostData = (post: {}): void => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        return console.log({ data });
      });
  };

  public handleChange = (e: ChangeEvent<any>): void =>
    this.setState({ [e.target.name]: e.target.value });

  public handleSubmit = (e: any): void => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.PostData(post);
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

interface IFormState {
  title: any;
  body: any;
}
