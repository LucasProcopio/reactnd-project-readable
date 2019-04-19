import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import createRootReducer from "../reducers";
import middleware, { history } from "../middleware";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./Home";
import Category from "./Category";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostDetail from "./PostDetail";
import EditComment from "./EditComment";

const store = createStore(createRootReducer(history), middleware);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:category" component={Category} />
              <Route exact path="/new/post" component={NewPost} />
              <Route exact path="/post/:post_id" component={EditPost} />
              <Route
                exact
                path="/comment/:comment_id"
                component={EditComment}
              />
              <Route exact path="/:category/:post_id" component={PostDetail} />
            </Switch>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
