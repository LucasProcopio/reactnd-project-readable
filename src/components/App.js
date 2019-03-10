import React from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './dashboard/Dashboard'

class App extends React.Component {
    componentDidMount() {
        // dispatch the action creator handleInitialData
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar />
                {this.props.loading === true
                    ? <p>Loading...</p>
                    : <Dashboard />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: Object.keys(state.posts).length === 0
})

export default connect(mapStateToProps)(App)
