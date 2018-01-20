import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';



import {getCountries} from './actions/actions-countries';


render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router> 
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());

/* 
<Provider> czyni store dostępnym dla wszystkich zdefiniowanych w aplikacji 
komponentów kontenerowych bez konieczności jawnego przekazywania go do nich.
*/