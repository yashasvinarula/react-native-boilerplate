import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//import reducers 
import dummyReducer from '../reducers';

const reducer = combineReducers ({ 
    dummy: dummyReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store