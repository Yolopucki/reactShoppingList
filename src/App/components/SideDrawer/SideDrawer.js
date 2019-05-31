import React from 'react';

const SideDrawer = ({categories}) => {
    return (
        <div>
            {categories.map((category)=><p>{category}</p>)}
        </div>
    );
};


export default SideDrawer;
