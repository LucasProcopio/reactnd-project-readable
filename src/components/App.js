import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createRootReducer from '../reducers'
import middleware, { history } from '../middleware'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from './dashboard/Home'
import Category from './dashboard/Category'

const store = createStore(createRootReducer(history), middleware)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route extact path="/:category" component={Category} />
                        </div>
                    </Router>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
