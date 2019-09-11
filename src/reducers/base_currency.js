import types from '../actions/type'

const initState = {base:"USD", amount:"10.00", onEdit:false}


export default function (state = initState, action) {
    switch (action.type) {
    case types.BASE_CURRENCY.EDIT:
      return {...state, onEdit: true}
    case types.BASE_CURRENCY.UPDATE:
        return {...state, amount:action.payload.amount, onEdit:false}
    default:
      return state
  }
}
