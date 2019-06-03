import React from 'react';
import {InputGroup} from 'react-bootstrap';
import Button from "react-bootstrap/Button";

class SideDrawer extends React.Component {

    render() {
        const {category, handleCategories} = this.props;
        return (
            <div>
                <Button className="mb-3" onClick={()=>{handleCategories(category)}}>{category}</Button>
            </div>
        );
    }

};


export default SideDrawer;
