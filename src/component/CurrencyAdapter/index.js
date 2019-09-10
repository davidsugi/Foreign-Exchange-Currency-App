import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CurrencyCard from '../CurrencyCard';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
      marginTop: '120px',
      marginBottom:'20px',
  },
  icon: {
      color: 'white',
  },
}));

function CurrencyAdapter({currencies,emitEvent,base,amount}) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root} data-test="CurrencyAdapter">  
            <Grid container spacing={2}>
                {
                    Object.keys(currencies).map((currency)=>{
                        return <CurrencyCard key={currency} emitEvent={emitEvent} base={base} symbol={currency} rates={currencies[currency]} amount={amount*currencies[currency]} />;
                    })
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

