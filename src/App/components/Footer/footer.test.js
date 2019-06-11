import React from 'react';
import {shallow} from 'enzyme/build';
import Footer from './Footer';

describe('Footer', ()=>{
    it('should render without errors',()=>{
        const component = shallow(<Footer/>);
        const wrapper = component.find(`[data-test='footerComponent']`);
        expect(wrapper.length).toBe(1);
    })
});
