import { legacy_createStore as createStore, combineReducers,compose, applyMiddleware} from 'redux'
import input1Reducer from './input1Reducer'
import input2Reducer from './input2Reducer'
import opeReducer from './opeReducer'
import OutputReducer from './outputReducer'

const rootReducer = combineReducers({
    input1Reducer:input1Reducer,
    input2Reducer:input2Reducer,
    opeReducer: opeReducer,
    OutputReducer:OutputReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware()
  ));
// const store = createStore(rootReducer);
console.log(store.getState())
export default store


