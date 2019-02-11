import React, { Component } from "react";

export default class PostForm extends Component<IFormState, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  public handleChange = (e: any): void => this.setState({[e.target.name]: e.target.value})
  render(): JSX.Element {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <textarea name="body" id="" value={this.state.body} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

interface IFormState {
  title: any;
  body: any;
}
