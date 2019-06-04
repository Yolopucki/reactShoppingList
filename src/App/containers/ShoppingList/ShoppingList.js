import React, {Component} from 'react';

import ShoppingItem from "./shoppingItem/ShoppingItem";

class ShoppingList extends Component {

// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     if(this.props.shoppingList !== nextProps.shoppingList || this.props.categories !== nextProps.categories){
//         return true
//     }return false
// }
    render() {
        const {shoppingList, categories, filterItems} = this.props;
        let display;
        display = shoppingList && categories && shoppingList.filter(filterItems)
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
            ));

        return (
            <div className="container-fluid col-12 col-md-9 ">
                <div className='products row d-flex mt-1 justify-content-around flex-wrap'>
                    {display}
                </div>
            </div>
        );
    }
}

export default ShoppingList;
