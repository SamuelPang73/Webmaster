import * as React from 'react' ;

import StartDiv from '../../components/EmailDeliverability/StartDiv';
import HowFilter from '../../components/EmailDeliverability/HowFilter';
import Features from '../../components/EmailDeliverability/Features';
import Platform from '../../components/EmailDeliverability/Platform';
import Reviews from '../../components/EmailDeliverability/Reviews';
import GetStarted from '../../components/EmailDeliverability/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const EmailDeliverability = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <StartDiv />
           <HowFilter />
           <Features />
           {/* <Platform />
           <Reviews /> */}
           <GetStarted />
        </Box>
    )
}

export default EmailDeliverability ;