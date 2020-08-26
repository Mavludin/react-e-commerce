const initialState = {
    totalCount: 0 || parseInt(localStorage.getItem('amountOfProducts'))
}

export const mainReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_BY_ONE') {
        return { totalCount: state.totalCount + 1 };
    } else if (action.type === 'ORDER_PLACED') {
        return { totalCount: 0 };
    }
    return { ...state }
}