import React from "react";
import {shallow} from "enzyme";

import {findByTestAtrr} from "../../../Utils/utils";
import Footer from "./Footer";

describe("Footer", () => {
    it("should render without errors", () => {
        const component = shallow(<Footer/>);
        const wrapper = findByTestAtrr(component, "footerComponent");
        expect(wrapper.length).toBe(1);
    });
});
