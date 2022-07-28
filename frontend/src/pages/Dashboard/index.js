import * as React from 'react' ;

import StartDiv from '../../components/Dashboard/StartDiv';
import Outbound from '../../components/Dashboard/Outbound';
import Integration from '../../components/Dashboard/Integration';
import Learning from '../../components/Dashboard/Learning' ;
import Community from '../../components/Dashboard/Community';
import HowWork from '../../components/Dashboard/HowWork';
import Platform from '../../components/Dashboard/Platform';
import ColdEmail from '../../components/Dashboard/ColdEmail';
import GetStarted from '../../components/Dashboard/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const Dashboard = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <StartDiv />
           <Outbound />
           <Integration />
           {/* <Learning /> */}
           {/* <Community /> */}
           <HowWork />
           {/* <Platform /> */}
           {/* <ColdEmail /> */}
           <GetStarted />
        </Box>
    )
}

export default Dashboard ;