import React from "react";
import {shallow} from "enzyme";

import Filter from "./Filter";
import {checkProps, findByTestAtrr} from "../../../Utils/utils";


describe("Filter component", () => {
    it("should render without errors", () => {
        const component = shallow(<Filter/>);
        const wrapper = findByTestAtrr(component, "filterComponent");
        expect(wrapper.length).toBe(1);
    });

    it("check prop types must pass", () => {
        const expectedProps = {
            handleFilterSearch: () => {
            },
            searchedValue: "some string",
            searchedCategory: "category"
        };
        const propsErr = checkProps(Filter, expectedProps);
        expect(propsErr).toBeUndefined();
    });
});
