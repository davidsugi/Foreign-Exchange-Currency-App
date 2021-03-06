import types from './type';
import axios from 'axios';
import { URL } from '../constants'

export const addCurrency = (id) => ({
    type: types.CURRENCY.ADD
});

export const cancelAddCurrency = (id) => ({
    type: types.CURRENCY.CANCEL
});

export const  deleteCurrency = (id) => ({
    id,
    type: types.CURRENCY.DELETE
});

export const editBaseCurrency = () => ({
    type: types.BASE_CURRENCY.EDIT
});

export const updateBaseCurrency = (amount) => ({
    payload:{amount:amount},
    type: types.BASE_CURRENCY.UPDATE
});

export const getCurrency = (base,symbol) => async (dispatch) => {
    dispatch({ type: types.LOAD_CURRENCY.REQUEST})
    return await axios.get(`${URL}latest?base=${base}&symbols=${symbol}`)
    .then(res => {
        dispatch({
            type: types.LOAD_CURRENCY.SUCCESS,
            payload: res.data
        })
        return true;
    })
    .catch(err => {
        dispatch({ type: types.LOAD_CURRENCY.FAIL, payload:err})   
        return false;    
    })
};
