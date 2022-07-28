import * as React from 'react' ;

import Categories from '../../components/Integrations/Categories';
import APISupport from '../../components/Integrations/APISupport';

import {
    Box,
} from '@mui/material' ;

import { useStyles } from './StyledDiv/index.styles';

const Integrations = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
           <Categories />
           <APISupport />
        </Box>
    )
}

export default Integrations ;