import * as React from 'react' ;

import StartDiv from '../../components/Lemwarm/StartDiv';
import LikeList from '../../components/Lemwarm/LikeList';
import AutoPilot from '../../components/Lemwarm/AutoPilot';
import Companies from '../../components/Lemwarm/Companies';
import Reviews from '../../components/Lemwarm/Reviews';
import Maximum from '../../components/Lemwarm/Maximum';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const Lemwarm = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <StartDiv />
           <LikeList />
           <AutoPilot />
           {/* <Companies /> */}
           {/* <Reviews /> */}
           <Maximum />
        </Box>
    )
}

export default Lemwarm ;