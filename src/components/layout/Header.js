import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { brandname } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{brandname}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link"><div className="fas fa-plus"></div> Add Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><div className="fas fa-question"></div> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brandname: "My App"
};

Header.propTypes = {
  brandname: PropTypes.string.isRequired
}

export default Header;
