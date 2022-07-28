import React from 'react' ;

import {
    Box
} from '@mui/material' ;

import LinkDiv from './LinkDiv';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : 30
    },
    divider : {
        border  : '1px solid lightgray'
    }
}));

const Footer = () => {

    const classes = useStyles () ;

    return (
        <Box className={classes.root}>
            <LinkDiv />
            <Box className={classes.divider} />
            <Box sx={{p : '20px'}}>
                <Box sx={{textAlign  :'center'}}>
                    © 2022 lemlist. All rights reserved.
                </Box>
                <Box sx={{textAlign :'center', cursor : 'pointer', "&:hover":{color : '#4d19ff'}}}>
                    Manage cookies
                </Box>
            </Box>
        </Box>
    )
}

export default Footer ;