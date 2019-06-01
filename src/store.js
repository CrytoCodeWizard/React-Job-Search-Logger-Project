import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import RolesReducer from './reducers/RolesReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RolesReducer, composeEnhancer(applyMiddleware(thunk)));

export default store
