import * as React from "react";
import "./App.css";
import { PostForm, Posts } from "./components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from 'redux';

import store from './store'

export class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
