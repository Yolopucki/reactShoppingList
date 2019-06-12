import React from "react";
import {shallow} from "enzyme";

import SideDrawer from "./SideDrawer";
import {findByTestAtrr, checkProps} from "../../../Utils/utils";


const setUp = (props = {}) => {
    return shallow(<SideDrawer {...props}/>);
};
describe("SideDrawer", () => {
    describe("should render has category", () => {
        it("should render without errors", () => {
            const props = {
                category: "food", emitEvent: () => {
                }
            };
            let component = setUp(props);
            const wrapper = findByTestAtrr(component, "sideDrawerComponent");
            expect(wrapper.length).toBe(1);
        });
        it("should check prop types and pass", () => {
            const expectedProps = {
                category: "food", emitEvent: () => {
                }
            };
            const propsError = checkProps(SideDrawer, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe("should NOT render", () => {
        it("should not render", () => {
            let component = setUp();
            const wrapper = component.find(`[data-test='sideDrawerComponent']`);
            expect(wrapper.length).toBe(0);
        });
    });
});
