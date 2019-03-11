import React from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import Category from './Category'

class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboardMain">
                <Category categories={this.props.categories} />
                <Posts posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: Object.keys(state.posts).map(key => state.posts[key]),
    categories: Object.keys(state.categories).map(key => state.categories[key]),
})
export default connect(mapStateToProps)(Dashboard)