import * as React from 'react' ;

import { useMeasure } from 'react-use' ;
import ONE from '../../assets/Home/1.svg';

import {
    Box, img
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        position : 'absolute',
        color : 'white',
        "& img" : {
            width : '100%',
            height : '100%'
        }
    },
})) ;

const NumberDiv = (props) => {
    const classes = useStyles(props) ;

    const {
        number,
        width,
        height,
        rowIdx,
        colIdx
    } = props ;

    return (
        <Box className={classes.root} 
            sx={{
                width : width+'px', 
                height : height+'px',
                top : `${height * (rowIdx - 1) }px`,
                left : `${width * (colIdx - 1) -15 }px`,
            }}
        >
            <img src={ONE} />
        </Box>

    )
}

export default NumberDiv ;