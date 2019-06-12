import React from "react";
import PropTypes from "prop-types";

import {Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./ShoppingItem.scss";


const onGetStarsWidth = (stars) => {
    const starTotal = 5;
    const starPercentage = (stars / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    return starPercentageRounded;
};

const ShoppingItem = (props) => {
    const {image, name, link, price, stars} = props;
    return (
        <Card className='cardItem mt-2 mb-2' data-test='shoppingItemComponent'>
            <Card.Img
                variant="top"
                src={image}
                className="image"
            />
            <Card.Body className="cardItem__body">
                <div className="stars-outer">
                    <div className="stars-inner" style={{width: onGetStarsWidth(stars)}}></div>
                </div>
                <Card.Text className="cardItem__text">{name}</Card.Text>
                <Card.Title className="cardItem__title">Price: {price} $</Card.Title>
                <Button variant="success" size="lg" className="cardItem__button"><a href={link}>Buy</a></Button>
            </Card.Body>
        </Card>
    );
};

ShoppingItem.propTypes = {
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    stars: PropTypes.number
};

export default ShoppingItem;
