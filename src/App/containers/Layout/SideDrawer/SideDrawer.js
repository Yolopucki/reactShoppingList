import React from 'react';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";

const SideDrawer = (props) => {
    const {category, handleCategories} = props;
    return (
        <Link to={category}> <Button
            block
            className="mb-3"
            onClick={() => {
                handleCategories(category);
            }}
        >{category}</Button></Link>
    );
};


export default SideDrawer;
