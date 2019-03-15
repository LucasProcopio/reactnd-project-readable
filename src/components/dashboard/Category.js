import React from 'react'
import { connect } from 'react-redux'
import { handlePostsByCategory } from '../../actions/shared'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

class Category extends React.Component {
    state = {
        category: 'all'
    }

    handleChange = e => {
        e.preventDefault()
        const category = e.target.value
        this.setState(() => ({
            category
        }))
        this.props.dispatch(handlePostsByCategory(category))
    }
    render() {
        return (
            <div className="categoryMain">
                {/* TODO: show posts related to their category */}
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-categories">
                        Categories
                    </InputLabel>
                    <Select
                        value={this.state.category}
                        name="categories"
                        onChange={this.handleChange}
                    >
                        <MenuItem value="all">
                            <em>All</em>
                        </MenuItem>
                        {this.props.categories.map(category => (
                            <MenuItem key={category.path} value={category.path}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    categories: Object.keys(state.categories).map(key => state.categories[key]),
})
export default connect(mapStateToProps)(Category)