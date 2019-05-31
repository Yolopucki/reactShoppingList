import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingItem.css'


const getStarsWidth = (stars) => {
    const starTotal = 5;
    const starPercentage = (stars / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    return starPercentageRounded;
};
const blockStyle = {
    display: 'block'
};
const ShoppingItem = ({image, name, link, price, id, stars}) => {
    return (
        <div className="product">
            <a
                href={link}
                style={{display: 'block'}}
            >
                <img
                    src={image}
                    alt={name}
                    className="thumb"
                />
            </a>
            <div className="stars-outer">
                <div
                    className="stars-inner"
                    style={{width: getStarsWidth(stars)}}
                >
                </div>
            </div>
            <p><a
                href={link}
                style={blockStyle}
            >{name}</a></p>
            <span style={blockStyle}>Code: {id}</span>
            <h3>Price: {price}$</h3>
            <button
                className="btn btn-success btn-lg"
                style={blockStyle}
            >Buy
            </button>
        </div>
    );
};

ShoppingItem.propTypes = {
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.string,
    stars: PropTypes.number
};

export default ShoppingItem;
