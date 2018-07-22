// index.js combines all reducers then pass them to createStoreWithMiddleware : 

import { combineReducers } from 'redux';
import movies from './movies_reducer';

const rootReducer = combineReducers({
    movies // reducer , we add all reducers here , combineReducers will combine them and pass them to createStorewithMiddleware
})

export default rootReducer;