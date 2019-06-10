import React from 'react';
import {shallow} from 'enzyme';
import ShoppingList from './ShoppingList';

describe('ShoppingList', ()=>{
    it('should render without errors',()=>{
        const component = shallow(<ShoppingList/>);
        const wrapper = component.find(`[data-test='shoppingListComponent']`);
        expect(wrapper.length).toBe(1);
    })
});
