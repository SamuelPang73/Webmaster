import * as React from 'react';

import FollowUp1Image from '../../assets/followup/followup_1.png' ;
import FollowUp2Image from '../../assets/followup/followup_2.jpg' ;
import FollowUp3Image from '../../assets/followup/followup_3.jpg' ;
import FollowUp4Image from '../../assets/followup/followup_4.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/FllowSteps.styles';
import {useTheme} from '@mui/styles';

const FollowSteps = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    const stepsList = [
        {
            title : 'Create the perfect cold email sequence',
            descp : <>
                <Box>
                    Run your outreach campaigns on autopilot and send uniquely personalized follow-up emails. Edit your sequence, add as many steps as you like and set up desired delays between each.
                </Box>
            </>,
            img : FollowUp1Image
        },
        {
            title : "Stop sending emails when prospects reply",
            descp : "When a prospect replies or clicks on a specific link, you can stop sending the rest of the campaign automatically. No embarrassing moments, no manual work.",
            img : FollowUp2Image
        },
        {
            title : "Your schedule, your rules",
            descp : "Deliver your email sequence at the right time across any time zone. Analyze how different schedules perform and save the best ones for your future campaigns.",
            img : FollowUp3Image
        },
        {
            title : "Real time insights",
            descp : "At any time, you're able to see at what stage a specific prospect is at and what email they'll receive next",
            img : FollowUp4Image
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box >
                    {
                        stepsList.map((item, index) => (
                            <Grid container key={index} spacing={5} sx={{marginBottom : '150px'}}> 
                                {
                                    index % 2 === 0 ? <>
                                        <Grid item xs={6}>
                                            <img src={item.img} className={classes.imageCss}/>
                                        </Grid>
                                        <Grid item xs={6} key={index} className={classes.likeDiv}>
                                            <Box className={classes.titleDiv}>{item.title}</Box>
                                            <Box className={classes.descpDiv}>{item.descp}</Box>
                                        </Grid>
                                    </> : <>
                                        <Grid item xs={6} key={index} className={classes.likeDiv}>
                                            <Box className={classes.titleDiv}>{item.title}</Box>
                                            <Box className={classes.descpDiv}>{item.descp}</Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src={item.img} className={classes.imageCss}/>
                                        </Grid>
                                    </>
                                }
                            </Grid>
                        ))
                    }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FollowSteps ;