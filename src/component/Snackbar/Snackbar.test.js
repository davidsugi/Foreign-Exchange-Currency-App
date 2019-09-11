import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr,checkProps } from '../../utils';
import Snackbar from './index';

const setUp = (props={}) => {
    const component = shallow(<Snackbar {...props} />);
    return component;
};

describe('Snackbar Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = { className:'success', message:'open snackbar!', handleClose:()=>{}, open:true, variant:'success'}
            const propsError = checkProps(Snackbar, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});

describe('Renders', () => {

let wrapper;
let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = { className:'success', message:'open snackbar!', handleClose:mockFunc, open:true, variant:'success'};
        wrapper = setUp(props)
    });

    it('Should Render a Snackbar', () => {
        const snackbar = findByTestAtrr(wrapper, 'snackbarComponent');
        expect(snackbar.length).toBe(1);
    });
});