import { combineReducers } from 'redux'
import currency from './currency'
import base_currency from './base_currency'

export default combineReducers({
  currency,
  base_currency
})