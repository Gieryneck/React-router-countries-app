import { combineReducers } from 'redux';

import countriesReducer  from './countries-reducer';

const rootReducer = combineReducers({

    countriesReducer
});

export default rootReducer;