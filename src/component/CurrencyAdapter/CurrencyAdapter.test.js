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
            const expectedProps = {symbol:"USD", base:"IDR", rates:0, amount:0, emitEvent: ()=>{ } ,currencies: {} }
            const propsError = checkProps(CurrencyAdapter, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});

describe('Renders with complete Props', () => {

let wrapper;
let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {symbol:"USD", base:"IDR", rates:0, amount:0, emitEvent: mockFunc, currencies: {CNY:2000} };
        wrapper = setUp(props)
    });

    it('Should Render an Adapter', () => {
        const button = findByTestAtrr(wrapper, 'CurrencyAdapter');
        expect(button.length).toBe(1);
    });

    it('Shouldnt Render an No data Warning', () => {
        const hint = findByTestAtrr(wrapper, 'noDataHint');
        expect(hint.length).toBe(0);
    });
});

describe('Renders with no currencies Props', () => {

    let wrapper;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {symbol:"USD", base:"IDR", rates:0, amount:0, emitEvent: mockFunc, currencies: {} };
        wrapper = setUp(props)
    });

    it('Should Render an No data Warning', () => {
        const hint = findByTestAtrr(wrapper, 'noDataHint');
        expect(hint.length).toBe(1);
    });
});