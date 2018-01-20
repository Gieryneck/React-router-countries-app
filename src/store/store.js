import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../devtools';


const store = createStore(
    rootReducer,
    DevTools.instrument()
  );

export default store;