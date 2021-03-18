import {createStore, combineReducers} from 'redux'
import {itemReducer} from '../store/item/itemReducer'


const reducers = combineReducers({
    itemReducer
});

const store = createStore(
    reducers,{itemReducer:{items:[]}},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;