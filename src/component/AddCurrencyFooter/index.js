import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddCircle';
import React from 'react';

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
  textField:{
      margin:'10px 30px'
  }
}));

export default function AddCurrencyFooter(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            { props.isActive ? 
            <Card>
                    <Grid container className={classes.header}>
                        <Grid item xs={8} md={10}>
                            <TextField
                                id="standard-name"
                                label="Currency Code"
                                className={classes.textField}
                                margin="none"
                                placeholder="ex: JPY"
                            />
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <Button variant="contained" color="primary" className={classes.submitButton} fullWidth>
                                Primary
                            </Button>
                        </Grid>
                    </Grid>
            </Card> : 
            <Button variant="contained" color="primary" fullWidth>
                <AddIcon className={classes.extendedIcon} />
                Add More Currencies
            </Button>
        }
        </Container>
    )
}