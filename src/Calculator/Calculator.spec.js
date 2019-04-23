import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator/>));

    it('should contain <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
});