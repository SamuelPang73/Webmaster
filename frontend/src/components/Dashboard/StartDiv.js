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
            <Grid item xs={6} sx={{display : 'flex', justifyContent:'flex-end'}}>
                <Box sx={{maxWidth : '550px'}}>
                    <Box sx={{fontSize : '48px', fontWeight: 'bold'}}>
                        Start Conversations that get replies
                    </Box>
                    <Box sx={{fontSize : '18px', mb : '20px', mt : '10px'}}>
                        Personalize cold emails, automate follow-ups, and engage with leads across all channels. lemlist is your sales automation and cold email software in one.
                    </Box>
                    <Box>
                        <Button variant={'contained'} className={classes.buttonCss}>Start for free</Button>
                        <Box sx={{color : '#333', mt : '10px', fontSize : '13px'}}>
                            No credit card required.
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <img src={StartImage} 
                    width={'100%'}
                    style={{maxWidth : '550px'}}
                />
            </Grid>
        </Grid>
    )
}

export default StartDiv ;