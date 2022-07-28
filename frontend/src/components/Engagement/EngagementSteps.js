import * as React from 'react';

import Step1Image from '../../assets/engagement/step_1.png' ;
import Step2Image from '../../assets/engagement/step_2.png' ;
import Step3Image from '../../assets/engagement/step_3.jpg' ;
import Step4Image from '../../assets/engagement/step_4.png' ;
import Step5Image from '../../assets/engagement/step_5.png' ;
import Step6Image from '../../assets/engagement/step_6.png' ;
import Step7Image from '../../assets/engagement/step_7.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/EngagementSteps.styles';
import {useTheme} from '@mui/styles';

const EngagementSteps = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    const stepsList = [
        {
            title : 'Sales automation platform',
            descp : <>
                <Box>
                    Create multichannel outbound sequences that interact with prospects across multiple channels.
                </Box>
            </>,
            img : Step1Image
        },
        {
            title : "Landing pages with custom videos",
            descp : "Ramp up the amount of meetings booked by adding dynamic landing pages and videos to your funnel. This means that every prospect is redirected to a page that's uniquely customized for them... along with a video and your Calendly embedded.",
            img : Step2Image
        },
        {
            title : "You're one cold call away",
            descp : "We know how important it is to call your leads at the right time and make your life easier when you're closing. Therefore, instant notifications and one-click calls are at your service.",
            img : Step3Image
        },
        {
            title : "Have your ENTIRE sales team synced",
            descp : "There's no efficiency without simplicity. Precisely why we help your team work as one. Seamlessly assign tasks between each other, add notes on prospects, receive data in real time, eliminate poor quality leads, and hit that quota every month.",
            img : Step4Image
        },
        {
            title : "Add custom tasks to your sales cadence",
            descp : "For example, share their blog article or retweet their recent message on Twitter. There's no limit when it comes to channels you can leverage to connect with your leads.",
            img : Step5Image
        },
        {
            title : "Reporting & labels",
            descp : "Check your campaign performance at a glance. Group them with labels to receive stats for a specific channel or audience.",
            img : Step6Image
        },
        {
            title : "Bring order to the chaos",
            descp : "A simple calendar overview for your campaigns. Get access to all the precious info: what campaign comes next, what stage a specific lead is at, what step they'll receive next, etc.",
            img : Step7Image
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

export default EngagementSteps ;