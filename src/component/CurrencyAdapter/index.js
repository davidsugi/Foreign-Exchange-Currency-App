import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CurrencyCard from '../CurrencyCard';

const useStyles = makeStyles(theme => ({
  root: {
      marginTop: '120px',
      marginBottom:'20px',
  },
  icon: {
      color: 'white',
  },
}));

export default function CurrencyAdapter(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>  
            <Grid container spacing={2}>
                <CurrencyCard />        
                <CurrencyCard />        
                <CurrencyCard />        
            </Grid> 
        </Container>
    )
}