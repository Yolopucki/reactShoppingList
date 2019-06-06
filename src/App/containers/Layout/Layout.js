import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';


import SideDrawer from './SideDrawer/SideDrawer';
import ShoppingList from '../../containers/ShoppingList/ShoppingList';
import Footer from './Footer/Footer';
import Filter from '../../components/Filter/Filter';
import ButtonGroup from 'react-bootstrap/es/test/ButtonGroup';
import {initiateGetData} from '../../redux/ajax/actions';

class Layout extends Component {
    state = {
        searchedValue: '',
        searchedCategory: []
    };

    componentDidMount() {
        const {location} = this.props;
        const {searchedCategory, searchedValue} = this.state;
        this.props.onGetData();
        if ((location.search || location.pathname) && !searchedCategory[0] && !searchedValue) {
            let word = location.search && location.search.substring(1, location.search.length);
            let category = location.pathname && location.pathname.substring(1, location.pathname.length);
            this.setState({
                searchedValue: word, searchedCategory: searchedCategory[0] = category
            });
        }

    }

// search by input
    handleFilterSearch = (event) => {
        this.setState({searchedValue: event.target.value});
    };
    // change value in  filter by category
    handleCategories = (category) => {
        let newFilteredByCategories = [...this.state.searchedCategory];
        newFilteredByCategories[0] = category;
        this.setState({searchedCategory: newFilteredByCategories});
    };
// for mapping array of products
    filterItems = (item) => {
        return item.name.toLowerCase().includes(this.state.searchedValue)
            && this.state.searchedCategory.includes(item.bsr_category);
    };


    render() {
        const {searchedValue, searchedCategory} = this.state;
        return (
            // some inline styles for keeping footer at the bottom
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
                        {this.props.categories && this.props.categories.map(category => <SideDrawer
                            key={category} {...{category}}
                            handleCategories={this.handleCategories}
                        />)}
                    </ButtonGroup>
                    <Switch>
                        <Route
                            path='/:category'
                            render={props =>
                                <ShoppingList {...props} shoppingList={this.props.shoppingList}
                                              categories={this.props.categories}
                                              filterItems={this.filterItems}
                                />
                            }
                        />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {categories: state.categories, shoppingList: state.products};
};
const mapDispatchToProps = dispatch => {
    return {
        onGetData: () => dispatch(initiateGetData())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
