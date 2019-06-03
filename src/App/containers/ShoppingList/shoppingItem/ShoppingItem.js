import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingItem.css';
import { Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";


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
        <Card style={{width: '18rem'}}>
            <Card.Img
                variant="top"
                src={image}
                style={{maxHeight:"280px", width:"80%", marginLeft:"50%", transform:"translateX(-50%)"}}
            />
            <Card.Body style={{display:"flex", flexDirection:"column"}}>
                <div className="stars-outer">
                    <div
                        className="stars-inner"
                        style={{width: getStarsWidth(stars)}}
                    >
                    </div>
                </div>
                <Card.Text style={{flexGrow: '3'}}>{name}</Card.Text>
                <Card.Title style={{textAlign: "center"}}>Price: {price} $</Card.Title>
                <Button
                    variant="success"
                    size="lg"
                    style={{width: "100%"}}
                ><a href={link}>Buy</a></Button>
            </Card.Body>
        </Card>
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
