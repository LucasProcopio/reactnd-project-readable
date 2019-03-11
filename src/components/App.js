import React from 'react'
import { connect } from 'react-redux'
import {
    handlePostsData,
    handleCategoryData
} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './dashboard/Dashboard'

class App extends React.Component {
    componentDidMount() {
        // dispatch the action creator handlePostsData
        this.props.dispatch(handleCategoryData())
        this.props.dispatch(handlePostsData())

    }

    render() {
        return (
            <div>
                <LoadingBar />
                {this.props.loading === true
                    ? null
                    : <Dashboard />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: Object.keys(state.posts).length === 0,
})

export default connect(mapStateToProps)(App)
