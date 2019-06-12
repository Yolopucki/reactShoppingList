import React from "react";
import {shallow} from "enzyme";

import ShoppingList from "./ShoppingList";
import {findByTestAtrr, checkProps} from "../../../../Utils/utils";
import PropTypes from "prop-types";

describe("ShoppingList", () => {
    it("should render without errors", () => {
        const component = shallow(<ShoppingList/>);
        const wrapper = findByTestAtrr(component, "shoppingListComponent");
        expect(wrapper.length).toBe(1);
    });
    it("should check proptypes and pass", () => {
        let expectedProps = {
            shoppingList: [{name: "vitya"}, {name: "vasya"}],
            categories: ["some", "string"],
            filterItems: () => {
            }
        };
        const propsError = checkProps(ShoppingList, expectedProps);
    });
});
