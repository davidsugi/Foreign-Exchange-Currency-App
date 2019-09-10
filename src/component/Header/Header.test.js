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
            const expectedProps = {base:"IDR", amount:0, edit: ()=>{ }, update: ()=>{ }, onEdit:true,  }
            const propsError = checkProps(Header, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

});


describe('Header Component without onEdit Props', () => {

    let component;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const expectedProps = {base:"IDR", amount:10, edit:mockFunc,update:mockFunc, onEdit:false,  }
        component = setUp(expectedProps);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render pencil icon with amount text without errors', () => {
        const wrapper = findByTestAtrr(component, 'amountText');
        expect(wrapper.length).toBe(1);
        const pencilIcon = findByTestAtrr(component, 'pencilIcon');
        expect(pencilIcon.length).toBe(1);
    });

    it('Shouldnt render check icon and Edit amount form without errors', () => {
        const wrapper = findByTestAtrr(component, 'EditTextField');
        expect(wrapper.length).toBe(0);
        const checkIcon = findByTestAtrr(component, 'checkIcon');
        expect(checkIcon.length).toBe(0);
    });


});


describe('Header Component without onEdit Props', () => {

     let component;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const expectedProps = {base:"IDR", amount:10, edit:mockFunc,update:mockFunc, onEdit:true,  }
        component = setUp(expectedProps);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Shouldnt render pencil icon with amount text without errors', () => {
        const wrapper = findByTestAtrr(component, 'amountText');
        expect(wrapper.length).toBe(0);
        const pencilIcon = findByTestAtrr(component, 'pencilIcon');
        expect(pencilIcon.length).toBe(0);
    });

    it('Should render check icon and Edit amount form without errors', () => {
        const wrapper = findByTestAtrr(component, 'EditTextField');
        expect(wrapper.length).toBe(1);
        const checkIcon = findByTestAtrr(component, 'checkIcon');
        expect(checkIcon.length).toBe(1);
    });



});