import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import React from 'react';
import { CURRENCY_OPTIONS } from '../../constants';

const useStyles = makeStyles(theme => ({
  header: {
      margin: '0px auto',
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

   formControl: {
       margin: '10px 30px',
       minWidth: 120,
   },
}));

function AddCurrencyFooter({onEdit,submit,onAdding}) {
     const [value, setValue] = React.useState();

    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            { onAdding ? 
            <Card data-test="form">
                    <Grid container className={classes.header}>
                        <Grid item xs={8} md={10}>
                            <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor = "currency-code-dropdown" >
                                Currency Code
                            </InputLabel>
                            <Select
                            value={value}
                            autoWidth
                            name="Currency Code"
                            inputProps={{ name: 'currency code',id: 'currency-code-dropdown',}}
                            onChange={(e)=>setValue(e.target.value)}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            {
                                CURRENCY_OPTIONS.map(symbol=>{
                                    return <MenuItem key={symbol} value={symbol}>{symbol}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                         
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Button data-test="submitCurrency" variant="contained" color="primary" onClick={()=> submit(value) } className={classes.submitButton} fullWidth>
                                { value==="" ? "Cancel" : "Submit" }
                            </Button>
                        </Grid>
                    </Grid>
            </Card> : 
            <Button variant="contained" color="primary" onClick={()=>{onEdit();setValue("")}} fullWidth  data-test="addCurrency">
                <AddIcon className={classes.extendedIcon} />
                Add More Currencies
            </Button>
        }
        </Container>
    )
}

AddCurrencyFooter.propTypes = {
    onAdding: PropTypes.bool,
    onEdit: PropTypes.func,
    submit: PropTypes.func
};

export default AddCurrencyFooter;