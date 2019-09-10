import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr,checkProps } from '../../utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Checking PropTypes', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {base:"IDR", amount:0, emitEvent: ()=>{ } }
            const propsError = checkProps(Header, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

});


describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });


});