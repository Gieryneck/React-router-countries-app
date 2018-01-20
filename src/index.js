import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import DevTools from './devtools';

import {getCountries} from './actions/actions-countries';


render(
    <Provider store={store}>
        
        <DevTools />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());

/* 
<Provider> czyni store dostępnym dla wszystkich zdefiniowanych w aplikacji 
komponentów kontenerowych bez konieczności jawnego przekazywania go do nich.
*/