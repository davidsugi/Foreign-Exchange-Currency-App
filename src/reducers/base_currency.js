import types from '../actions/type'

const initState = {base:"USD", amount:10000, onEdit:false}


export default function (state = initState, action) {
    switch (action.type) {
    case types.BASE_CURRENCY.EDIT:
      return {...state, onEdit: true}
    case types.BASE_CURRENCY.UPDATE:
        return {...state, base: action.payload.base, amount:action.payload.amount}
    default:
      return state
  }
}
