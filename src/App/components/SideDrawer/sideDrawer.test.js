import React from 'react';
import {shallow} from 'enzyme/build';
import SideDrawer from './SideDrawer';


const setUp = (props = {}) => {
    return shallow(<SideDrawer {...props}/>);
};
describe('SideDrawer', () => {
    describe('should render has category', () => {
        let component;
        beforeEach(() => {
            const props = {
                category: 'food', emitEvent: ()=>{}
            };
            component = setUp(props);

        });
        it('should render without errors', () => {
            const wrapper = component.find(`[data-test='sideDrawerComponent']`);
            expect(wrapper.length).toBe(1);
        });


        describe('should NOT render', () => {
            it('should not render', () => {
                let component = setUp();
                const wrapper = component.find(`[data-test='sideDrawerComponent']`);
                expect(wrapper.length).toBe(0);
            });
        });

    });
});
