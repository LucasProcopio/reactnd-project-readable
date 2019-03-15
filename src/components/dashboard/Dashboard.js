import React from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import Category from './Category'

class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboardMain">
                <Category />
                <Posts posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: Object.keys(state.posts).map(key => state.posts[key]),
})
export default connect(mapStateToProps)(Dashboard)