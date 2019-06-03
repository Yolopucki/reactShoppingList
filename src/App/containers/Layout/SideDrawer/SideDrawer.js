import React from 'react';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";

class SideDrawer extends React.Component {

    render() {
        const {category, handleCategories} = this.props;
        return (
            <div>
               <Link to={category}> <Button
                    className="mb-3"
                    onClick={() => {
                        handleCategories(category);
                    }}
               >{category}</Button></Link>
            </div>
        );
    }

};


export default SideDrawer;
