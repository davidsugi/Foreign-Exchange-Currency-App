import types from '../actions/type'

const initState = {data:{}, isLoading: false, onAdding:false}


export default function (state = initState, action) {
    switch (action.type) {
    case types.LOAD_CURRENCY.REQUEST:
      return {...state, isLoading:true}
    case types.LOAD_CURRENCY.FAIL:
      return {...state, isLoading:false, error: action.payload.error,}
    case types.LOAD_CURRENCY.SUCCESS:
        return {
            ...state,
            data: {
                    ...state.data,
                    ...Object.keys(action.payload.rates).reduce((accumulator, item) => {
                        return {
                            ...accumulator,
                            [item]: action.payload.rates[item]
                        }
                    }, {})
                },
                isLoading: false,
                onAdding:false,
            }
    case types.CURRENCY.DELETE:
        let newState = Object.keys(state.data).reduce((r, e) => {
            if (action.id!==e) r[e] = state.data[e];
            return r
          }, {})
        return {...state, data: newState,}
    case types.CURRENCY.ADD:
        return {...state, onAdding: true }
    case types.CURRENCY.CANCEL:
        return {...state, onAdding: false }
    default:
      return state
  }
}
