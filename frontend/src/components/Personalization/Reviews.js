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

import { useStyles } from './StyledDiv/Reviews.styles';

const Reviews = () => {
    const classes = useStyles() ;

    const reviewsList = [
        {
            img : CapterraImage,
            star : StarsP500,
            height : 34,
            name : 'Capterra'
        },
        {
            img : G2Image,
            star : StarsP500,
            height :50,
            name : "G2"
        },
        {
            img : Gmail,
            star : StarsP700,
            height : 50,
            name : 'Google'
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Box sx={{fontSize : '28px', fontWeight: 'bold', textAlign : 'center'}}>
                        We encourage you to google "lemlist reviews"
                    </Box>
                </Grid>
                {
                    reviewsList.map((review, index) => (
                        <Grid item xs={4} key={index} sx={{display : 'flex', flexDirection :'column', justifyContent : 'center', alignItems : 'center', gap : '10px'}}>
                            <img src={review.img} 
                                style={{height : review.height + 'px'}}
                            />
                            <img src={review.star} 
                                style={{height : '40px'}}
                            />
                            <a >see our reviews on {review.name}</a>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Reviews ;