import * as React from 'react' ;

import StartDiv from '../../components/FollowUp/StartDiv';
import FllowSteps from '../../components/FollowUp/FllowSteps';
import Features from '../../components/FollowUp/Features';
import Companies from '../../components/FollowUp/Companies';
import Reviews from '../../components/FollowUp/Reviews';
import GetStarted from '../../components/FollowUp/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const FollowUp = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <StartDiv />
           <FllowSteps />
           <Features />
           {/* <Companies />
           <Reviews /> */}
           <GetStarted />
        </Box>
    )
}

export default FollowUp ;