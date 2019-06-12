import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from '../../../components/shoppingItem/ShoppingItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ShoppingList extends Component {
    render() {
        const {shoppingList, categories, filterItems} = this.props;
        let display;
        display = shoppingList && categories && shoppingList.filter(filterItems)
            .map(p => (
                <ShoppingItem
                    key={p.asin} id={p.asin} image={p.img} name={p.name} link={p.link} price={p.price} stars={p.stars}
                />
            ));
        return (
            <Col xs={12} md={9} className="container-fluid" data-test='shoppingListComponent'>
                <Row className='products d-flex mt-1 justify-content-around flex-wrap'>
                    {display}
                </Row>
            </Col>
        );
    }
}

ShoppingList.propTypes = {
    shoppingList: PropTypes.array,
    categories: PropTypes.array,
    filterItems: PropTypes.func
};

export default ShoppingList;
