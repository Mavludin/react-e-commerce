const redux = require('redux');

const initialState = {
    totalCount: 0
}

const mainReducer = (previousState = initialState, action) => {
    if(action.type === 'INCREMENT_BY_ONE') {
        return {totalCount: previousState.totalCount+1};
    }
    return {...previousState}
}

//Create the global state
const globalState = redux.createStore(mainReducer);

globalState.subscribe(()=> {
    console.log(globalState.getState());
});

globalState.dispatch({type:'INCREMENT_BY_ONE'});