import * as React from 'react';

import Image7_1 from '../../assets/dashboard/7_1.jpeg' ;
import Image7 from '../../assets/dashboard/7.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Learning.styles';

const Learning = () => {
    const classes = useStyles() ;

    const watchList = [
        "Target LinkedIn prospects, find emails & send campaigns automatically",
        "How to warm up your email account [2021 in-depth guide]",
        "How to use personalized images in cold emails"
    ]

    const guidesList = [
        "The most extensive cold email guide from A to Z.",
        "Cold email guide for beginners [step-by-step]",
        "8 follow-up email templates that will skyrocket your reply rate."
    ]

    return (
        <Box className={classes.root}>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold'}}>
                    Learning resources + examples
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box className={classes.templatesDiv}>
                        <Box sx={{fontSize : '24px', fontWeight : 'bold'}}>
                            📩  100+ email templates
                        </Box>
                        <Box sx={{fontSize : '18px',textAlign : 'center'}}>
                            Cold email templates you find online almost never have data that prove they work. Until now. After analyzing 50,000,000+ sequences from 30K+ people worldwide, we've uncovered the top secrets and proven data on how to get more replies.
                        </Box>
                        <Button variant='outlined' className={classes.buttonCss}>Access Templates</Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{mt : '20px'}} spacing={3}>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <Box className={classes.cardDiv}>
                        <Box className={classes.titleDiv}>
                            Watch tutorials
                        </Box>
                        <img src={Image7} />
                        {
                            watchList.map((watchItem , index) => {
                                return (
                                    <Box className={classes.watchItemDiv} key={index}>
                                        <Box sx={{fontSize : '18px'}}>
                                            {watchItem}
                                        </Box>
                                        <Box>
                                            <a href={'#'}>Watch </a>
                                            🎬
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        <Button variant='outlined' className={classes.buttonCss}>Read more</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                    <Box className={classes.cardDiv}>
                        <Box className={classes.titleDiv}>
                            Read actionable guides
                        </Box>
                        <img src={Image7_1} />
                        {
                            guidesList.map((guideItem , index) => {
                                return (
                                    <Box className={classes.watchItemDiv} key={index}>
                                        <Box sx={{fontSize : '18px'}}>
                                            {guideItem}
                                        </Box>
                                        <Box>
                                            <a href={'#'}>👉 Read</a>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        <Button variant='outlined' className={classes.buttonCss}>Read more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Learning ;