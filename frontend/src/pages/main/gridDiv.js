import * as React from 'react' ;

import { useMeasure } from 'react-use' ;

import {
    Box
} from '@mui/material' ;

import { Backdrop } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NumberDiv from './numberDiv';


const useStyles = makeStyles(() => ({
    root : {
        display : 'flex' , justifyContent : 'center',
    },
    rectDiv : {
        border : '8px solid',
        backdropFilter: "blur(8px)",
        borderRadius: '20px !important',
        borderColor: '#9E5CD2',
        background: '#080177',
        position:'relative',
    },
    horizontalDiv : {
        position : 'absolute',

        height : '100%',
        width : '100%',

        top : 0,
        left : 0,

        display : 'flex' , justifyContent : 'space-between', 

        "& div:first-child" : {
            border : 'none'
        },
        "& div:last-child" : {
            border : 'none'
        }
    },
    verticalDiv  : {
        position : 'absolute',

        height : '100%',
        width : '100%',

        top : 0,
        left : 0,

        display : 'flex', flexDirection : 'column', justifyContent : 'space-between',

        "& div:first-child" : {
            border : 'none'
        },
        "& div:last-child" : {
            border : 'none'
        }
    },
    hLineDiv : {
        border : '2px solid',
        borderColor : 'rgba(255, 255, 255, 0.25)',
        height : '100%'
    },
    vLineDiv : {
        border : '2px solid',
        borderColor : 'rgba(255, 255, 255, 0.25)',
        width : '100%'
    }
})) ;

const GridDiv = () => {
    const classes = useStyles() ;

    const [gridRef, {width, height}] = useMeasure() ;

    return (
        <Box className={classes.root} ref={gridRef}>
            <Box sx={{width : `${width}px`, height : `${width}px`}} className={classes.rectDiv} key={0}>
                <Box className={classes.horizontalDiv} >
                    {
                        [...Array(5)].map((item, index) => (
                            <Box key={index} className={classes.hLineDiv} />
                        ))
                    }
                </Box>
                <Box className={classes.verticalDiv} >
                    {
                        [...Array(5)].map((item, index) => (
                            <Box key={index} className={classes.vLineDiv} />
                        ))
                    }
                </Box>
                <NumberDiv 
                    width={width/4}
                    height={width/4}
                    rowIdx={4}
                    colIdx={3}
                    number={13}
                    key={13}
                />
                                <NumberDiv 
                    key={14}
                    width={width/4}
                    height={width/4}
                    rowIdx={4}
                    colIdx={4}
                    number={14}
                />
            </Box>
        </Box>
    )
}

export default GridDiv ;