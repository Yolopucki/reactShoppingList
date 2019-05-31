import React, {Component} from 'react';
import axios from 'axios';

import ShoppingItem from "../../components/shoppingItem/ShoppingItem";
import Filter from "../../components/Filter/Filter";

import './ShoppingList.css';
import SideDrawer from "../../components/SideDrawer/SideDrawer";

class ShoppingList extends Component {
    state = {
        shoppingList: null,
        filteredValue: '',
        categories: null
    };

    componentDidMount() {
        axios.get('https://demo8421975.mockable.io/products')
            .then(list => {
                this.setState({shoppingList: list.data.products});
                let newCategories = new Set(list.data.products.map(p=> p.bsr_category));
                this.setState({categories:newCategories})
                console.log(newCategories);
            })
            .catch(error => console.log(error));

    }

    filterItems = (event) => {
        this.setState({filteredValue: event.target.value});
    };

    render() {
        const {filteredValue, shoppingList, categories} = this.state;
        return (
            <div>

                <Filter
                    filterItemsHandler={this.filterItems}
                    filteredValue={filteredValue}
                />
                <div className="row">
                    <div className="col-3">
                        <SideDrawer {...{categories}}/>
                    </div>
                    <div className='products col-9'>
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

            </div>
        );
    }
}

export default ShoppingList;
