import React, { Component } from "react";

export default class Posts extends Component<{}, IPostState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: []
    };
  }

  fetchPosts = (): void => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        return this.setState({ posts: data });
      });
  };

  componentDidMount() {
    this.fetchPosts();
  }
  render(): JSX.Element {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

interface IPostState {
  posts: Array<any>;
}
