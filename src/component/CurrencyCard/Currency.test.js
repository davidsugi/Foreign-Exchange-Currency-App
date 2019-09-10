import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr,checkProps } from '../../utils';
import CurrencyCard from './index';

const setUp = (props={}) => {
    const component = shallow(<CurrencyCard {...props} />);
    return component;
};

describe('CurrencyCard Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {symbol:"USD", base:"IDR",rates:0, amount:0, emitEvent: ()=>{ } }
            const propsError = checkProps(CurrencyCard, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});

describe('Renders', () => {

let wrapper;
let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {symbol:"USD", base:"IDR", rates:0, amount:0, emitEvent: mockFunc };
        wrapper = setUp(props)
    });

    it('Should Render a button', () => {
        const button = findByTestAtrr(wrapper, 'card');
        expect(button.length).toBe(1);
    });

     it('Should emit callback on click event', () => {
        const button = findByTestAtrr(wrapper, 'buttonDelete');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    }); 
});