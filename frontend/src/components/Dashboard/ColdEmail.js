import * as React from 'react';

import CapterraImage from '../../assets/dashboard/capterra.png' ;
import G2Image from '../../assets/dashboard/g2.png' ;
import Gmail from '../../assets/dashboard/gmail.png' ;
import StarsP500 from '../../assets/dashboard/stars-p-500.png' ;
import StarsP700 from '../../assets/dashboard/stars-p-700.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/ColdEmail.styles';

const ColdEmail = () => {
    const classes = useStyles() ;

    const coldEmailList = [
        {
            img : CapterraImage,
            star : StarsP500,
            height : 34
        },
        {
            img : G2Image,
            star : StarsP500,
            height :50
        },
        {
            img : Gmail,
            star : StarsP700,
            height : 50
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Box sx={{fontSize : '28px', fontWeight: 'bold', textAlign : 'center'}}>
                        Best cold email software? Here's the verdict
                    </Box>
                </Grid>
                {
                    coldEmailList.map((coldEmail, index) => (
                        <Grid item xs={4} key={index} sx={{display : 'flex', flexDirection :'column', justifyContent : 'center', alignItems : 'center', gap : '10px'}}>
                            <img src={coldEmail.img} 
                                style={{height : coldEmail.height + 'px'}}
                            />
                            <img src={coldEmail.star} 
                                style={{height : '40px'}}
                            />
                            <a >see our reviews on</a>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ColdEmail ;