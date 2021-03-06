import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';

class CountryFlagContainer extends Component {

    // eslint-disable-next-line
    constructor(props) {

        super(props);
    }

    componentDidMount() {

        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(event) {

        this.props.dispatch(searchCountries(event.target.value));
    }

    deleteCountry(id) {

        this.props.dispatch(deleteCountry(id));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};


export default connect(mapStateToProps)(CountryFlagContainer); 
// we're connecting our smart component to state.countries thanks to 'connect' and 'Provider'. 


/* 
The Provider is the root of your components and is reponsible for giving your other components access to the redux store.
'connect' connects your components to the redux store. It has four optional arguments and returns another function. 
The returned function takes a component that you want to give access to (specific parts of) the redux store.


mapStateToProps takes the current state of your store returns an object. The object maps store values 
to values that will be available as props in your component
*/