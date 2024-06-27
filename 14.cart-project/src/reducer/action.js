export const DATA = "DATA"
export const DELETE = "DELETE"
export const DECREMENT = "DECREMENT"

function reducer(state,action){
    if(action.type === DATA){
        return {...state, data: action.payload}
    }
    if (action.type === DELETE) {
        return {...state, data: state.data.filter((item) => item.id !== action.payload.id)}
    }
    if (action.type === DECREMENT) {
        return {
            ...state, data: state.data.map((item) => (item.id === action.payload.id ? { ...item, amount: item.amount + 1 }
                : item))}
    }

}

export default reducer