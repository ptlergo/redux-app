import * as React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends React.Component<any, IPostState> {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render(): JSX.Element {
    const postItems = this.props.posts.map((post: any) => (
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

const mapStateToProps = (state: any) => ({
  posts: state.posts.items
})
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
interface IPostState {
  posts: Array<any>;
}
