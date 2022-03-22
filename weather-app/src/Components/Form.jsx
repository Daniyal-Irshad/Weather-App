import React, { useEffect } from 'react';
import {Box, TextField, Button, makeStyles} from '@material-ui/core';
import { getData } from '../Services/api';

const useStyles = makeStyles({
    component:{
        padding: 10,
        background:"blue",  
    },
    input:{
        color:"#fff",
        marginRight: 15,
    },
    button:{
        height: 40,
        width: 150,
        background:"#e67a22",
        color:"#fff",
        marginTop: 10,
    }
})

const Form = () => {
    const classes = useStyles();

    useEffect(()=>{
        console.log(getData);
    }, []);
  return (
    <Box className={classes.component}>
        <TextField
            inputProps={{className: classes.input}}
            className={classes.input}
            label="City"
        />
        <TextField
            inputProps={{className: classes.input}}
            className={classes.input}   
            label="Country"
        />
        <Button 
            className={classes.button}
            variant='contained'>
        Get Together
        </Button>
    </Box>
  )
}

export default Form