import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Header from '../component/Header';
import CurrencyAdapter from '../component/CurrencyAdapter';
import AddCurrencyFooter from '../component/AddCurrencyFooter';
import actions from '../actions'

function App() {
  return (
    <div>
      <Header />
      <CurrencyAdapter />
      <AddCurrencyFooter />
    </div>
  );
}


const mapStateToProps = state => ({
  currency: state.currency.data,
  base_currency: state.base_currency,
})

export default connect(
  mapStateToProps,
  actions
)(App)