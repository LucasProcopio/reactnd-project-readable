import React from 'react'
import { connect } from 'react-redux'
import { handleCategoryData } from '../../actions/shared'
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleCategoryData())
    }

    render() {
        return (
            <div className="categoryMain">
                <ul>
                    <li key="all"><Link to="/">All</Link></li>
                    {this.props.categories.map(category => (
                        <li key={category.path}> <Link to={category.path}>{category.name}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    categories: Object.keys(state.categories).map(key => state.categories[key]),
})
export default connect(mapStateToProps)(NavigationBar)