import React from 'react';
import {shallow} from 'enzyme';
import Filter from './Filter';

describe('Filter', ()=>{
    it('should render without errors',()=>{
        const component = shallow(<Filter/>);
        const wrapper = component.find(`[data-test='filterComponent']`);
        expect(wrapper.length).toBe(1);
    })
});
