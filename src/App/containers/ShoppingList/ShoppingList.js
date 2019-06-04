import React, {Component} from 'react';

import ShoppingItem from "./shoppingItem/ShoppingItem";

class ShoppingList extends Component {
    state = {
        url: ''
    };

    getDataFromUrl = () => {
        // let url, regExpCategory, resC, category, regExpSearchedWord, resW, searchedWord;
        // url = this.props.match.params.category;
        //
        // try {
        //     //category
        //     regExpCategory = /.+&/;
        //     resC = url.match(regExpCategory);
        //     category = resC[0].substring(0, resC[0].length - 1);
        //     //word
        //     regExpSearchedWord = /(?<=(.[a-z]&)).+/;
        //     resW = url.match(regExpSearchedWord);
        //     searchedWord = resW[0];
        // } catch (e) {
        //     console.log(e);
        // }
        // console.log(searchedWord, 'and', category);
        // console.log(this.props.match.params.category);

    };

    componentDidMount() {
//    check if it is first load and ajax is called then set state to
//    this.props.match.param
        this.getDataFromUrl();


    }

    render() {
        const {shoppingList, categories, filterItems, ...all} = this.props;
        let display;
        console.log(this.props);


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
