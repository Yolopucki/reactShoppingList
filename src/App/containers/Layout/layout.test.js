import React from "react";
import {shallow} from "enzyme";

import Layout from "./Layout";
import {findByTestAtrr, testStore, checkProps} from "../../../Utils/utils";
import ajaxReducer from "./../../redux/ajax/reducers";
import PropTypes from "prop-types";

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Layout store={store}/>).childAt(0).dive();
    return wrapper;
};
describe("Layout component", () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            ajaxReducer
        };
        wrapper = setUp(initialState);
    });
    it("should render without errors", () => {
        const component = findByTestAtrr(wrapper, "layoutComponent");
        expect(component.length).toBe(1);
    });
    it("should check props and pass", () => {
        const expectedProps = {
            categories: ["some", "string"],
            shoppingList: [{name: "vitya"}, {name: "vasya"}]
        };
        const propsError = checkProps(Layout, expectedProps);
        expect(propsError).toBeUndefined();
    });
});
