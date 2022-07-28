import * as React from 'react' ;

import Lemlist from '../../assets/blog/lemlist.png' ;

import {
    Box,
    Grid
} from '@mui/material' ;

import { useStyles } from './StyledDiv/StartDiv.styles';

const StartDiv = () => {
    const classes = useStyles() ;
    
    return (
        <>
            <Grid container sx={{pt : '70px !important', mb : '100px'}}>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box className={classes.root}>
                        <img src={Lemlist} />
                        <Box sx={{fontSize : '20px'}}>
                            Actionable tactics to grab your prospects's attention and drive sclable revenue.
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default StartDiv ;