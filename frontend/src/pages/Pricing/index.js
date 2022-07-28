import * as React from 'react' ;

import StartDiv from '../../components/Pricing/StartDiv';
import LeadGen from '../../components/Pricing/LeadGen';
import Companies from '../../components/Pricing/Companies';
import Features from '../../components/Pricing/Features';
import Reviews from '../../components/Pricing/Reviews';
import Questions from '../../components/Pricing/Questons';
import Integrate from '../../components/Pricing/Integrate';
import GetStarted from '../../components/Pricing/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const Pricing = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <StartDiv />
            <LeadGen />
            <Features />
            {/* <Companies /> */}
            {/* <Reviews /> */}
            <Questions />
            <Integrate />
            <GetStarted />
        </Box>
    )
}

export default Pricing ;