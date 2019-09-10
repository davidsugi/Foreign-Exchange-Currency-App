import React,{Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Header from '../component/Header';
import CurrencyAdapter from '../component/CurrencyAdapter';
import AddCurrencyFooter from '../component/AddCurrencyFooter';
import { getCurrency, updateBaseCurrency,editBaseCurrency, deleteCurrency, addCurrency,cancelAddCurrency } from '../actions'

export class main extends Component {
  constructor(props) {
    super(props)
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleDeleteCurrency=this.handleDeleteCurrency.bind(this)
  };

  fetchCurrency(code){
    if(code===""){
      this.props.cancelAddCurrency();
    }
    else{
      this.props.getCurrency(this.props.base_currency.base,code);
    }
    
  }
  
  handleDeleteCurrency(symbol){
    this.props.deleteCurrency(symbol);
  }

  render() {
    var { base_currency, currency,addCurrency,updateBaseCurrency,editBaseCurrency } = this.props;
    return (
        <div>
          <Header base={base_currency.base} onEdit={base_currency.onEdit} amount={base_currency.amount} emitEvent={base_currency.onEdit ? updateBaseCurrency : editBaseCurrency } />
          <CurrencyAdapter  base={base_currency.base}  amount={base_currency.amount}  currencies={currency.data} emitEvent={this.handleDeleteCurrency} />
          <AddCurrencyFooter onAdding={currency.onAdding} submit={this.fetchCurrency} onEdit={addCurrency} />
        </div>
    )
  }
}


const mapStateToProps = state => ({
  currency: state.currency,
  base_currency: state.base_currency,
})


const mapDispatchToProps = { getCurrency, updateBaseCurrency,editBaseCurrency, deleteCurrency, addCurrency,cancelAddCurrency }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(main)