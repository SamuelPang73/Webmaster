import * as React from 'react' ;

import StartDiv from '../../components/Engagement/StartDiv';
import EngagementSteps from '../../components/Engagement/EngagementSteps';
import Features from '../../components/Engagement/Features';
import Companies from '../../components/Engagement/Companies';
import Reviews from '../../components/Engagement/Reviews';
import GetStarted from '../../components/Engagement/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const Engagement = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <StartDiv />
           <EngagementSteps />
           <Features />
           {/* <Companies />
           <Reviews /> */}
           <GetStarted />
        </Box>
    )
}

export default Engagement ;