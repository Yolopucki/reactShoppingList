import React, {Component} from 'react';
import axios from 'axios';

import ShoppingItem from "../../components/shoppingItem/ShoppingItem";
import Filter from "../../components/Filter/Filter";

import './ShoppingList.css';
import SideDrawer from "../../components/SideDrawer/SideDrawer";

class ShoppingList extends Component {
    state = {
        shoppingList: null,
        categories: null,
        filteredByInput: '',
        filteredByCategories: null
    };

    componentDidMount() {
        axios.get('https://demo8421975.mockable.io/products')
            .then(list => {
                this.setState({shoppingList: list.data.products});
                let newCategories = [...new Set(list.data.products.map(p => p.bsr_category))];
                const filteredByCategories = newCategories.reduce((obj, key, index) => Object.assign(obj, {[key]: index}), {});
                this.setState({categories: newCategories, filteredByCategories});
                console.log(newCategories);
            })
            .catch(error => console.log(error));

    }

    handleFilter = (event) => {
        this.setState({filteredByInput: event.target.value});
    };
    handleCategories = (event) => {
        let newFilteredByCategories = {...this.state.filteredByCategories};
        if (event.target.checked) {
            console.log(event.target.value, 'cheked');
            newFilteredByCategories[event.target.value] = 2;
            this.setState({filteredByCategories:newFilteredByCategories});
        } else {
            console.log(event.target.value, 'not checked');
            delete newFilteredByCategories[event.target.value];
            this.setState({filteredByCategories:newFilteredByCategories});
        }
    };

    filterItems = (item) => {
        return item.name.toLowerCase().includes(this.state.filteredByInput)
            && Object.keys(this.state.filteredByCategories).includes(item.bsr_category);
    };

    render() {
        const {filteredByInput, shoppingList, categories} = this.state;
        return (
            <div>
                <Filter
                    handleFilter={this.handleFilter}
                    filteredByInput={filteredByInput}
                />
                <div className="row">
                    <div className="col-3">
                        {categories && categories.map(category => <SideDrawer
                            key={category} {...{category}}
                            handleCategories={this.handleCategories}
                        />)}
                    </div>
                    <div className='products col-9'>
                        {shoppingList && categories && shoppingList.filter(this.filterItems)
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
