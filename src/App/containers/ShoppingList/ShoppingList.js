import React, {Component} from 'react';
import axios from 'axios';

import ShoppingItem from "../../components/shoppingItem/ShoppingItem";
import Filter from "../../components/Filter/Filter";

import './ShoppingList.css';

class ShoppingList extends Component {
    state = {
        shoppingList: null,
        filteredValue: '',
    };

    componentDidMount() {
        axios.get('https://demo8421975.mockable.io/products')
            .then(list => {
                this.setState({shoppingList: list.data.products})
            })
            .catch(error=>console.log(error))
    }

    filterItems = (event) => {
        this.setState({filteredValue: event.target.value});
    };

    render() {
        const {filteredValue, shoppingList} = this.state;
        return (
            <div>
                <Filter
                    filterItemsHandler={this.filterItems}
                    filteredValue={filteredValue}
                />
                <div className='products'>
                    {shoppingList && shoppingList.filter(p => p.name.toLowerCase().includes(filteredValue))
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
