import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

const SideDrawer = (props) => {
    const {category, handleCategories} = props;
    if (!category) return null;
    return (
        <Link to={category} data-test="sideDrawerComponent"> <Button
            block
            className="mb-3"
            data-test="sideDrawerButton"
            onClick={() => {
                handleCategories(category);
            }}
        >{category}</Button></Link>
    );
};

SideDrawer.propTypes = {
    category: PropTypes.string,
    handleCategories: PropTypes.func
};
export default SideDrawer;
