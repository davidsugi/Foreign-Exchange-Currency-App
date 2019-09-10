import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
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
  form:{
    color: 'white',
  }
}));

function Header({base,amount,edit,update,onEdit}) {
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
                        <IconButton aria-label="delete" onClick={()=>{ if(onEdit){update(value)} else {edit()} } } color="inherit" edge="end" size="medium">
                           { onEdit ? <DoneIcon data-test="checkIcon"/>  : <CreateIcon data-test="pencilIcon" />}
                        </IconButton>
                    </Grid>
                    <Grid item xs={false} sm={1}/>
                    <Grid item xs={9}>
                        <Typography>
                            <b>{base}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1}>
                        { onEdit ?
                            <TextField
                                id="standard-name"
                                margin="none"
                                value={value}
                                data-test="EditTextField"
                                autoFocus
                                type="number"
                                label="Amount"
                                InputProps={{ className: classes.form }}
                                InputLabelProps={{  className: classes.form }}
                                onChange={(e)=>{setValue(e.target.value)}}
                                placeholder="ex: 10000"
                            />
                        :<Typography data-test="amountText">
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
    edit: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    onEdit: PropTypes.bool
};

export default Header;

