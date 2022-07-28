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
                    Send personalized emails that get more replies
                </Box>
                <Box sx={{fontSize : '20px', mb : '20px', mt : '10px', textAlign : 'center', maxWidth : '940px'}}>
                    A complete email personalization software that helps you stand out in any inbox and build meaningful relationships with your prospects.
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'center', gap : '30px'}}>
                    <Button variant={'contained'} className={classes.buttonCss}>Start for free</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default StartDiv ;