import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {initiateGetData} from '../../redux/ajax/actions';
import classes from './layout.module.scss';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import ShoppingList from './ShoppingList/ShoppingList';
import Footer from '../../components/Footer/Footer';
import Filter from '../../components/Filter/Filter';


class Layout extends Component {
    state = {
        searchedValue: '',
        searchedCategory: ''
    };

    componentDidMount() {
        const {location} = this.props;
        let {searchedCategory, searchedValue} = this.state;
        //fetch  data via axios in saga
        this.props.onGetData();
        if ((location.search || location.pathname) && !searchedCategory && !searchedValue) {
            let word = location.search && location.search.substring(1, location.search.length);
            let category = location.pathname && location.pathname.substring(1, location.pathname.length);
            this.setState({
                searchedValue: word, searchedCategory: category
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
        newFilteredByCategories = category;
        this.setState({searchedCategory: newFilteredByCategories});
    };
// for mapping array of products
    filterItems = (item) => {
        if (this.state.searchedCategory === '') {
            return item.name.toLowerCase().includes(this.state.searchedValue);
        } else {
            if (item.name.toLowerCase().includes(this.state.searchedValue)
                && this.state.searchedCategory === (item.bsr_category)) {
                return true;
            }
        }
    };

    showAll = () => {
        this.setState((state) => ({searchedCategory: state.searchedCategory = ''}));
    };


    render() {
        const {searchedValue, searchedCategory} = this.state;
        return (
            // some inline styles for keeping footer at the bottom
            <Container data-test='layoutComponent' className={[classes.layoutComponent, 'position-relative'].join(' ')}>
                <Row className={classes.layoutRow}>
                    <Filter
                        handleFilterSearch={this.handleFilterSearch}
                        searchedValue={searchedValue} searchedCategory={searchedCategory}
                    />
                    <Col xs={12} md={3} className="d-flex flex-column">
                        <Link to='/showAll'>
                            <button className='btn btn-primary mb-4' onClick={this.showAll}> Show all</button>
                        </Link>
                        {this.props.categories && this.props.categories.map(category => <SideDrawer
                            key={category} {...{category}}
                            handleCategories={this.handleCategories}
                        />)}
                    </Col>
                    <Switch>
                        <Route
                            path='/:category'
                            render={props =>
                                <ShoppingList {...props} shoppingList={this.props.shoppingList}
                                              categories={this.props.categories} filterItems={this.filterItems}
                                />
                            }
                        />
                    </Switch>
                </Row>
                <Footer/>
            </Container>
        );
    }
}


const mapStateToProps = state => {
    return {categories: state.ajaxReducer.categories, shoppingList: state.ajaxReducer.products};
};
const mapDispatchToProps = dispatch => {
    return {
        onGetData: () => dispatch(initiateGetData())
    };
};

Layout.propTypes = {
    categories: PropTypes.array,
    shoppingList: PropTypes.array
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
