import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import { middlewares } from '../configure-store';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    // eslint-disable-next-line
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};


export const moneyFormat = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";

    let parsedAmount = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let extraDigitOfThousands = (parsedAmount.length > 3) ? parsedAmount.length % 3 : 0;
    //format decimals if given decimal count is less than currently float point
    let floatingpoint = Math.abs(amount - parsedAmount);
    floatingpoint= floatingpoint.toString().length > decimalCount ? floatingpoint.toFixed(decimalCount).slice(2) : floatingpoint;
    //if floating point is less than 2, make it 2
    floatingpoint= floatingpoint.toString().length < 2 ? floatingpoint.toFixed(2).slice(2) : floatingpoint;

    let decimals = (decimalCount ? decimal + floatingpoint : "");
    return negativeSign + (extraDigitOfThousands ? parsedAmount.substr(0, extraDigitOfThousands) + thousands : '') + parsedAmount.substr(extraDigitOfThousands).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + decimals;
  } catch (e) {
    console.log(e)
  }
};