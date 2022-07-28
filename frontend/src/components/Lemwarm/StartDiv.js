import * as React from 'react';

import StartImage from '../../assets/dashboard/Start.gif' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/StartDiv.styles';

const StartDiv = () => {
    const classes = useStyles() ;

    return (
        <Grid container spacing={5} sx={{pt : '80px'}}>
            <Grid item xs={12} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column',}}>
                <Box sx={{fontSize : '48px', fontWeight: 'bold', textAlign : 'center'}}>
                    No more deliverability issues for you
                </Box>
                <Box sx={{fontSize : '20px', mb : '20px', mt : '10px', textAlign : 'center', maxWidth : '940px'}}>
                    Give your email deliverability a huge boost and say goodbye to spam. Warm up any email address with lemwarm automagically.
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'center', gap : '30px'}}>
                    <Button variant={'outlined'} className={classes.buttonCss}>Start using lemwarm</Button>
                    <Button variant={'contained'} className={classes.buttonCss}>WTF is email warm-up?</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default StartDiv ;