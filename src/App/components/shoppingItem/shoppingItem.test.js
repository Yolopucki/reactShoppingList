import React from "react";
import {shallow} from "enzyme";

import ShoppingItem from "./ShoppingItem";
import {findByTestAtrr, checkProps} from "../../../Utils/utils";

describe("ShoppingItem", () => {
    it("should render without errors", () => {
        const component = shallow(<ShoppingItem/>);
        const wrapper = findByTestAtrr(component, "shoppingItemComponent");
        expect(wrapper.length).toBe(1);
    });
    it("should check prop types and pass", () => {
        const expectedProps = {
            image: "src",
            price: 12,
            name: "vitya",
            link: "url",
            stars: 5
        };
        const propsError = checkProps(ShoppingItem, expectedProps);
        expect(propsError).toBeUndefined();
    });
});
