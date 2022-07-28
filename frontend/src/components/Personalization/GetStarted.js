import * as React from 'react';

import StartImage from '../../assets/dashboard/Start.gif' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/GetStarted.styles';

const GetStarted = () => {
    const classes = useStyles() ;

    return (
        <Grid container spacing={5} sx={{mt : '80px', mb : '80px'}}>
            <Grid item xs={12} sx={{display : 'flex', justifyContent:'center'}}>
                <Box className={classes.startedDiv}>
                    <Box sx={{fontSize : '38px', fontWeight : 'bold'}}>Start free 14-day trial now</Box>
                    <Box  sx={{fontSize : '20px'}}>Send your first outreach campaign today.</Box>
                    <Button variant='contained' className={classes.buttonCss}>Get started for free</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default GetStarted ;