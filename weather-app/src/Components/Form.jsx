import React from 'react';
import {Box, TextField, makeStyles} from '@material-ui/core';


const Form = () => {
  return (
    <Box>
        <TextField
            label="City"
        />
        <TextField
            label="Country"
        />
    </Box>
  )
}

export default Form