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
                    Close deals faster by going multichannel
                </Box>
                <Box sx={{fontSize : '20px', mb : '20px', mt : '10px', textAlign : 'center', maxWidth : '940px'}}>
                    One sales engagement platform to manage your entire outbound sales funnel.<br/>
                    Send email sequences, make cold calls, and seamlessly sync with your team.
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'center', gap : '30px'}}>
                    <Button variant={'contained'} className={classes.buttonCss}>Get started</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default StartDiv ;