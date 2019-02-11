import * as React from "react";
import "./App.css";
import { PostForm, Posts } from "./components";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
