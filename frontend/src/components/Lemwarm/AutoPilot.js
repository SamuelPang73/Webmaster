import * as React from 'react';

import Image5 from '../../assets/dashboard/5.png' ;
import Image5_1 from '../../assets/dashboard/5_1.png' ;
import Image6 from '../../assets/dashboard/6.png' ;
import Image6_1 from '../../assets/dashboard/6_1.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/AutoPilot.styles';

const AutoPilot = () => {
    const classes = useStyles() ;

    return (
        <>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold', mb : '40px'}}>
                    1 minute to set up.<br/>
                    Runs 100% on autopilot!
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Button variant={'contained'} className={classes.buttonCss}>Boost Your Delverability today</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AutoPilot ;