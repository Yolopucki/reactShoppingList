import React, {Component} from 'react';

import ShoppingItem from "./shoppingItem/ShoppingItem";

class ShoppingList extends Component {
componentDidMount() {
    console.log(this.props);
}

    render() {
        const {shoppingList, categories, filterItems} = this.props;
        let display;
        if(filterItems){
            display  = shoppingList && categories && shoppingList.filter(filterItems)
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
        }else{
            display = shoppingList && categories && shoppingList.map(p => (
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
        }
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
