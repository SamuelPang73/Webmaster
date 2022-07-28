import * as React from 'react';

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Maximum.styles';

const Maximum = () => {
    const classes = useStyles() ;

    return (
        <Grid container spacing={5} sx={{mt : '80px', mb : '80px'}}>
            <Grid item xs={12} sx={{display : 'flex', justifyContent:'center'}}>
                <Box className={classes.startedDiv}>
                    <Box sx={{fontSize : '38px', fontWeight : 'bold'}}>Maximize email deliverability</Box>
                    <Box  sx={{fontSize : '20px'}}>And enjoy your spam-free sales life.</Box>
                    <Button variant='contained' className={classes.buttonCss}>Turn lemwarm on</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Maximum ;