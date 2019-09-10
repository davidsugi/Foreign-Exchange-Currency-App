import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CurrencyCard from '../CurrencyCard';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
      marginTop: '136px',
      marginBottom:'20px',
  },
  icon: {
      color: 'white',
  },
  noDatahint:{
      textAlign:'center',
      color:'grey'
  }
}));

function CurrencyAdapter({currencies,emitEvent,base,amount}) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root} data-test="CurrencyAdapter">  
            <Grid container spacing={2}>
                {
                    currencies && currencies.length>0 ? 
                    Object.keys(currencies).map((currency)=>{
                        return <CurrencyCard key={currency} emitEvent={emitEvent} base={base} symbol={currency} rates={currencies[currency]} amount={amount*currencies[currency]} />;
                    })
                    : 
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h5" data-test="noDataHint" className={classes.noDatahint}><i>No currency Found, Pelase add Currency first</i></Typography>
                    </Grid>
                }   
            </Grid> 
        </Container>
    )
}

CurrencyAdapter.propTypes = {
    currencies: PropTypes.object,
    symbol: PropTypes.string,
    base: PropTypes.string,
    amount: PropTypes.number,
    emitEvent: PropTypes.func
};


export default CurrencyAdapter;

