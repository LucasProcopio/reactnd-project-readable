import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

class Category extends React.Component {
    state = {
        text: ''
    }
    handleChange = e => {
        e.preventDefault()
        const text = e.target.value
        this.setState(() => ({
            text
        }))
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
                        value={this.state.text}
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

export default Category