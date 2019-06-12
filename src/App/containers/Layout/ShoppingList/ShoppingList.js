import React from "react";
import PropTypes from "prop-types";

import ShoppingItem from "../../../components/shoppingItem/ShoppingItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ShoppingList = (props) => {
    const {shoppingList, categories, onFilterItems} = props;
    let display;
    display = shoppingList && categories && shoppingList.filter(onFilterItems)
        .map(p => (
            <ShoppingItem
                key={p.asin} id={p.asin} image={p.img} name={p.name} link={p.link} price={p.price} stars={p.stars}
            />
        ));
    return (
        <Col xs={12} md={9} className="container-fluid" data-test="shoppingListComponent">
            <Row className="products d-flex mt-1 justify-content-around flex-wrap">
                {display}
            </Row>
        </Col>
    );
};

ShoppingList.propTypes = {
    shoppingList: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.arrayOf(PropTypes.string),
    filterItems: PropTypes.func
};

export default ShoppingList;
