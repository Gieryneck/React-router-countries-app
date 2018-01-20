export const GET_COUNTRIES = 'GET_COUNTRIES';
export function getCountries() {

    return {
        type: GET_COUNTRIES
    }
}


export const GET_COUNTRY = 'GET_COUNTRY';
export function getCountry(id) {

    return {
        type: GET_COUNTRY,
        id
    }
}

export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}


export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export function searchCountries(searchText) {

    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export const SET_CONTINENT = 'SET_CONTINENT';
export function setContinent(name) {

    return {
        type: SET_CONTINENT,
        name
    }
}