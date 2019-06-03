import React, {Component} from 'react';

import ShoppingItem from "./shoppingItem/ShoppingItem";

class ShoppingList extends Component {

    render() {
        const {shoppingList, categories, filterItems} = this.props;
        return (
            <div className="container-fluid col-12 col-md-9 ">
                <div className='products row d-flex mt-1 justify-content-around flex-wrap'>
                    {shoppingList && categories && shoppingList.filter(filterItems)
                        .map(p => (
                            <ShoppingItem
                                key={p.asin}
                                id={p.asin}
                                image={p.img}
                                name={p.name}
                                link={p.link}
                                price={p.price}
                                stars={p.stars}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ShoppingList;
