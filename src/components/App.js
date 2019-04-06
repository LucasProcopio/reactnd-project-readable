import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createRootReducer from '../reducers'
import middleware, { history } from '../middleware'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from './dashboard/Home'
import Category from './dashboard/Category'
import NewPost from './dashboard/NewPost'
import EditPost from './dashboard/EditPost'
import PostDetail from './dashboard/PostDetail'

const store = createStore(createRootReducer(history), middleware)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/:category" component={Category} />
                            <Route path="/new" component={NewPost} />
                            <Route exact path="/post/:post_id" component={EditPost} />
                            <Route excat path="/:category/:post_id" component={PostDetail} />
                        </div>
                    </Router>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
