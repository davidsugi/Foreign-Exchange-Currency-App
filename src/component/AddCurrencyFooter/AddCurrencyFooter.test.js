import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr,checkProps } from '../../utils';
import AddCurrencyFooter from './index';

const setUp = (props={}) => {
    const component = shallow(<AddCurrencyFooter {...props} />);
    return component;
};

describe('AddCurrencyFooter Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {onAdding:true, submit: ()=>{ }, onEdit: ()=>{ } }
            const propsError = checkProps(AddCurrencyFooter, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});

describe('Renders', () => {

let wrapper;
let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {onAdding:true, submit: mockFunc, onEdit: mockFunc};
        wrapper = setUp(props)
    });

    it('Should Render a Footer', () => {
        const button = findByTestAtrr(wrapper, 'form');
        expect(button.length).toBe(1);
    });

     it('Should emit addCurrency callback on click event', () => {
        const button = findByTestAtrr(wrapper, 'addCurrency');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    }); 
});