import React from 'react';
import {shallow} from 'enzyme/build';
import ShoppingItem from './ShoppingItem';

describe('ShoppingItem', ()=>{
    it('should render without errors',()=>{
        const component = shallow(<ShoppingItem/>);
        const wrapper = component.find(`[data-test='shoppingItemComponent']`);
        expect(wrapper.length).toBe(1);
    })
});
