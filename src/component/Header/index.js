import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { CURRENCY } from '../../constants';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  header: {
      margin: '20px auto',
  },
  icon: {
      color: 'white',
  },
}));

function Header({base,amount,emitEvent,onEdit}) {
    const [value, setValue] = React.useState(amount);

    const classes = useStyles();
    return (
        <AppBar data-test="headerComponent">
            <Toolbar>
                <Grid container className={classes.header}>
                    <Grid item xs={false} sm={1}/>
                    <Grid item xs={9}>
                        <Typography >
                           <i>{base} - {CURRENCY[base]}</i> 
                        </Typography>
                    </Grid>
                     <Grid item xs={2} >
                        <IconButton aria-label="delete" onClick={emitEvent} color="inherit" edge="end" size="medium">
                            <CreateIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={false} sm={1}/>
                    <Grid item xs={9}>
                        <Typography>
                            <b>{base}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        { onEdit ?
                            <TextField
                                id="standard-name"
                                label="Currency Code"
                                margin="none"
                                value={value}
                                onChange={(e)=>{setValue(e.target.value)}}
                                placeholder="ex: 10000"
                            />
                        :<Typography>
                            {amount}
                        </Typography>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    amount: PropTypes.number,
    base: PropTypes.string,
    emitEvent: PropTypes.func,
    onEdit: PropTypes.bool
};

export default Header;

