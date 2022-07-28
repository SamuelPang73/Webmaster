import * as React from 'react' ;

import StartDiv from '../../components/Personalization/StartDiv';
import Personalize from '../../components/Personalization/Personalize';
import OutReach from '../../components/Personalization/OutReach';
import Reviews from '../../components/Personalization/Reviews';
import GetStarted from '../../components/Personalization/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const Personalization = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <StartDiv />
           <Personalize />
           {/* <OutReach /> */}
           {/* <Reviews /> */}
           <GetStarted />
        </Box>
    )
}

export default Personalization ;