import * as React from 'react';

import Image8 from '../../assets/dashboard/8.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Community.styles';

const Community = () => {
    const classes = useStyles() ;

    return (
        <>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold'}}>
                    Community you can lean on
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent : 'center', mb : '30px'}}>
                    <Box sx={{textAlign : 'center', fontSize : '20px', color : '#333', maxWidth : '650px'}}>
                        lemlist family is a private community of sales reps, founders, growth marketers, recruiters who like to weigh in on each other’s ideas and strategies. Wanna join?
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Button variant={'outlined'} className={classes.buttonCss}>Join lemlist family</Button>
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center', mt : '60px'}}>
                    <img src={Image8} width={'80%'} style={{maxWidth : '650px'}}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Community ;