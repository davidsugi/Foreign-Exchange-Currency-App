import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCY } from '../../constants';
import {moneyFormat} from '../../utils';

const useStyles = makeStyles(theme => ({
  header: {
      padding: '10px 20px',
  },
  extendedIcon: {
      marginRight: theme.spacing(1),
  },
  icon: {
      color: 'white',
  },
  submitButton:{
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      height:'100%',
  },
  textField:{
      margin:'10px 30px'
  }
}));

function CurrencyCard({emitEvent,base, symbol,rates,amount }) {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} >
            <Card data-test="card">
                <Grid container >
                    <Grid item xs={10} className={classes.header}>
                        <Grid container>
                            <Grid item xs={6}>
                                 <Typography >{ symbol }</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                 <Typography style={{ textAlign:'end'}}>{ moneyFormat(amount) }</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography><i>{symbol} - {CURRENCY[symbol]}</i> </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography><i>1 {base} = {symbol} {moneyFormat(rates,5) }</i> </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Button data-test="buttonDelete" onClick={()=>{ if(emitEvent){emitEvent(symbol)}  }} variant="contained" color="primary" className={classes.submitButton} fullWidth>
                            <RemoveIcon className={classes.extendedIcon} />
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

CurrencyCard.propTypes = {
    amount: PropTypes.number,
    symbol: PropTypes.string,
    base: PropTypes.string,
    rates: PropTypes.number,
    emitEvent: PropTypes.func
};

export default CurrencyCard;

