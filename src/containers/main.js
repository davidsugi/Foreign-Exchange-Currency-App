import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { addCurrency, cancelAddCurrency, deleteCurrency, editBaseCurrency, getCurrency, updateBaseCurrency } from '../actions';
import AddCurrencyFooter from '../component/AddCurrencyFooter';
import CurrencyAdapter from '../component/CurrencyAdapter';
import Header from '../component/Header';
import Snackbar from '../component/Snackbar';
import { SNACKBAR_MESSAGE } from '../constants';

export class main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        snackBarOpen:false,
        snackBarMessage: "ADD",
        snackbarType:"success",
    };
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleDeleteCurrency=this.handleDeleteCurrency.bind(this);
    this.handleClose = this.handleClose.bind(this)
    this.refreshCurrency = this.refreshCurrency.bind(this)
  };
  
  refreshCurrency(){
    if(Object.keys(this.props.currency.data).length > 0){
      this.props.getCurrency(this.props.base_currency.base, Object.keys(this.props.currency.data).reduce((accumulator,current)=>{ return accumulator+','+current }));
    }
  }

  checkIfSymbolNotExist(symbol){
    if(Object.keys(this.props.currency.data).length > 0){
      return !Object.keys(this.props.currency.data).includes(symbol);
    }
    return true
  }

  componentDidMount() {
    this.refreshCurrency();
  }
  

  fetchCurrency(code){
      if(code===""){
        this.props.cancelAddCurrency();
      }
      else{
       if(this.checkIfSymbolNotExist(code)){
         this.props.getCurrency(this.props.base_currency.base,code).then((res)=>{
             if(res){
               this.setState({snackBarOpen:true, snackBarMessage: "ADD",snackbarType:'success'});
               this.refreshCurrency();
             }
             else{
               this.setState({snackBarOpen:true, snackBarMessage: "FAIL_ADD",snackbarType:'error'});
             }
         });
       }
       else{
          this.setState({snackBarOpen:true, snackBarMessage: "DUPLICATE",snackbarType:'error'});
       }
      }
  }
  
  handleDeleteCurrency(symbol){
    Swal.fire({
      title: 'Delete Currency?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
      focusCancel:true
    }).then((result) => {
      if (result.value) {
        this.props.deleteCurrency(symbol);
        this.setState({ snackBarOpen:true, snackBarMessage: "DELETE",snackbarType:'success'});
        this.refreshCurrency();        
      }
    })
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({snackBarOpen:false});
  }

  render() {
    var { base_currency, currency,addCurrency,updateBaseCurrency,editBaseCurrency } = this.props;
    return (
        <div>
          <Header base={base_currency.base} onEdit={base_currency.onEdit} amount={base_currency.amount} edit={editBaseCurrency} update={updateBaseCurrency}/>
          <CurrencyAdapter  base={base_currency.base}  amount={parseFloat(base_currency.amount,10)}  currencies={currency.data} emitEvent={this.handleDeleteCurrency} />
          <AddCurrencyFooter onAdding={currency.onAdding} submit={this.fetchCurrency} onEdit={addCurrency} />
          <Snackbar message={SNACKBAR_MESSAGE[this.state.snackBarMessage]} variant={this.state.snackbarType} open={this.state.snackBarOpen} handleClose={this.handleClose}/>
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