import React from 'react';
import {shallow} from 'enzyme';

import Layout from './Layout';
import {findByTestAtrr, testStore} from '../../../../Utils/utils';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Layout store={store}/>).childAt(0).dive();
    return wrapper;
};
describe('Layout component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: 'Example title 1',
                    body: 'some text'
                },
                {
                    title: 'Example title 2',
                    body: 'some text'
                },
                {
                    title: 'Example title 3',
                    body: 'some text'
                },
            ]
        };
        wrapper = setUp(initialState);
    });
    it('should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'layoutComponent');
        expect(component.length).toBe(1);
    });
});
