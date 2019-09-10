import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr,checkProps } from '../../utils';
import CurrencyAdapter from './index';

const setUp = (props={}) => {
    const component = shallow(<CurrencyAdapter {...props} />);
    return component;
};

describe('CurrencyAdapter Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {symbol:"USD", base:"IDR", rates:0, amount:0, emitEvent: ()=>{ } }
            const propsError = checkProps(CurrencyAdapter, expectedProps);
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

    it('Should Render an Adapter', () => {
        const button = findByTestAtrr(wrapper, 'CurrencyAdapter');
        expect(button.length).toBe(1);
    });
});