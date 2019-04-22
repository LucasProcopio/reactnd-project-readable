import React from "react";
import { connect } from "react-redux";
import { handleCategoryData } from "../actions/shared";
import { Link } from "react-router-dom";
import "../styles/navigation.scss";

class NavigationBar extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleCategoryData());
  }

  render() {
    return (
      <div className="category-navigation">
        <ul className="list-wrapper">
          <li key="all">
            <Link className="category-link" to="/">
              Home
            </Link>
          </li>
          {this.props.categories.map(category => (
            <li key={category.path}>
              <Link className="category-link" to={`/${category.path}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  categories: Object.keys(state.categories).map(key => state.categories[key])
});
export default connect(mapStateToProps)(NavigationBar);
