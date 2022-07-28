import * as React from 'react';

import Like1Image from '../../assets/lemwarm/like_1.png' ;
import Like2Image from '../../assets/lemwarm/like_2.png' ;
import Like3Image from '../../assets/lemwarm/like_3.png' ;
import Like4Image from '../../assets/lemwarm/like_4.png' ;
import Like5Image from '../../assets/lemwarm/like_5.png' ;
import Like6Image from '../../assets/lemwarm/like_6.png' ;
import Like7Image from '../../assets/lemwarm/like_7.png' ;

import EditIcon from '@mui/icons-material/Edit';
import ImageIcon from '@mui/icons-material/Image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DoneIcon from '@mui/icons-material/Done';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/LikeList.styles';
import {useTheme} from '@mui/styles';

const LikeList = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    const likeList = [
        {
            title : '1. Probably the best email warm-up tool out there',
            descp : 'Everything starts by sending smaller amounts of personalized emails and getting consistent engagement. The end result is a higher sender reputation and no more spam headaches.',
            img : Like1Image
        },
        {
            title : "2. Reliable because it's real people, not fake accounts",
            descp : "lemwarm is actively used by 20k+ people from 100+ countries. We don't use fake email addresses that will ruin your email domain. Instead, you exchange warm-up emails with REAL people resulting in a flawless reputation and high open rates.",
            img : Like2Image
        },
        {
            title : "3. You join an exclusive mailbox network",
            descp : "Some of the world's most reputable companies like Zendesk, Meero, Malt, Adeco, SAP, and Uber are all lemwarm members. The oldest domains are 25+ years old, so it's safe to say that you're in REALLY good company.",
            img : Like3Image
        },
        {
            title : "4. Best-in-class algorithm for highest impact",
            descp : "Our algorithm operates on 100+ different parameters. In plain English, this is one of the main reasons why your emails are kept out of spam and why big brands trust lemwarm. It's a state-of-the-art email warm-up tool.",
            img : Like4Image
        },
        {
            title : "5. Warm up your email domain progressively",
            descp : "We'll look into how old your email domain is and help you with the right warm-up strategy. Then we gradually increase the number of emails sent until the perfect delivery is achieved. Everything happens according to email providers' rules.",
            img : Like5Image
        },
        {
            title : "6. Maintain conversation threads",
            descp : "It's important for email providers to see that people are replying to your messages. lemwarm automates this too and keeps emails under the same thread, so it looks like a conversation.",
            img : Like6Image
        },
        {
            title : "7. Save your emails from spam & promotions",
            descp : "Warm up a new email domain properly, while protecting yourself from spam filters. lemwarm opens every email and marks it as important to give you that extra kick. And if a warm-up email goes to spam, we'll bring it back into your inbox.",
            img : Like7Image
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold'}}>
                    7 things you'll love about lemwarm
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent : 'center', mb : '30px'}}>
                    <Box sx={{textAlign : 'center', fontSize : '20px', color : '#333', maxWidth : '650px'}}>
                        From teams of 2 to 200+, lemlist solves every outreach automation challenge.
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box>
                    {
                        likeList.map((likeItem, index) => (
                            <Grid container key={index} spacing={5} sx={{marginBottom : '100px'}}> 
                                {
                                    index % 2 === 0 ? <>
                                        <Grid item xs={6}>
                                            <img src={likeItem.img} className={classes.likeImageCss}/>
                                        </Grid>
                                        <Grid item xs={6} key={index} className={classes.likeDiv}>
                                            <Box className={classes.titleDiv}>{likeItem.title}</Box>
                                            <Box className={classes.descpDiv}>{likeItem.descp}</Box>
                                        </Grid>
                                    </> : <>
                                        <Grid item xs={6} key={index} className={classes.likeDiv}>
                                            <Box className={classes.titleDiv}>{likeItem.title}</Box>
                                            <Box className={classes.descpDiv}>{likeItem.descp}</Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src={likeItem.img} className={classes.likeImageCss}/>
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

export default LikeList ;