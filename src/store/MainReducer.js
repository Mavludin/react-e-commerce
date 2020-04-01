const initialState = {
    totalCount: 0 || parseInt(localStorage.getItem('amountOfProducts'))
}

const MainReducer = (previousState = initialState, action) => {
    if (action.type === 'INCREMENT_BY_ONE') {
        return { totalCount: previousState.totalCount + 1 };
    } else if (action.type === 'ORDER_PLACED') {
        return { totalCount: 0 };
    }
    return { ...previousState }
}

export default MainReducer;