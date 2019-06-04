import React, {Component} from 'react';
import axios from "axios";
import {Route, Switch} from 'react-router-dom';


import SideDrawer from "./SideDrawer/SideDrawer";
import ShoppingList from "../../containers/ShoppingList/ShoppingList"
import Footer from "./Footer/Footer";
import Filter from "../../components/Filter/Filter";
import ButtonGroup from "react-bootstrap/es/test/ButtonGroup";

class Layout extends Component {
    state = {
        //all shop
        shoppingList: null,
        //all categories
        categories: null,
        //search by name
        searchedValue: '',
        //search by category
        searchedCategory: []
    };

    componentDidMount() {
        const {location} = this.props;
        const {searchedCategory, searchedValue} = this.state;
        axios.get('https://demo8421975.mockable.io/products')
            .then(list => {
                this.setState({shoppingList: list.data.products});
                let newCategories = [...new Set(list.data.products.map(p => p.bsr_category))];
                this.setState(
                    {
                        categories: newCategories,
                    });
            })
            .catch(error => console.log(error));
        if (location.search && location.pathname && !searchedCategory[0] && !searchedValue) {
            let word = location.search.substring(1, location.search.length);
            let category = location.pathname.substring(1, location.pathname.length);
            this.setState({
                searchedValue:word, searchedCategory:searchedCategory[0]=category
            })
        }

    }

    handleFilterSearch = (event) => {
        this.setState({searchedValue: event.target.value});
    };
    handleCategories = (category) => {
        let newFilteredByCategories = [...this.state.searchedCategory];
        newFilteredByCategories[0] = category;
        this.setState({searchedCategory: newFilteredByCategories});
    };

    filterItems = (item) => {
        return item.name.toLowerCase().includes(this.state.searchedValue)
            && this.state.searchedCategory.includes(item.bsr_category);
    };


    render() {
        console.log(this.props, 'location');
        const {categories, shoppingList, searchedValue, searchedCategory} = this.state;
        return (
            <div
                className="position-relative"
                style={{minHeight: '100vh'}}
            >
                <div
                    className="row"
                    style={{padding: '2.5rem'}}
                >
                    <Filter
                        handleFilterSearch={this.handleFilterSearch}
                        searchedValue={searchedValue}
                        {...{searchedCategory}}
                    />
                    <ButtonGroup className="col-12  col-md-3 d-flex flex-column">
                        {categories && categories.map(category => <SideDrawer
                            key={category} {...{category}}
                            handleCategories={this.handleCategories}
                        />)}
                    </ButtonGroup>
                    <Switch>
                        <Route
                            path='/:category'
                            render={props =>
                                <ShoppingList {...props} {...{shoppingList}} {...{categories}} filterItems={this.filterItems}/>
                            }
                        />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
