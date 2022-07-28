import * as React from 'react';

import Filter1Image from '../../assets/email_deliverability/filter_1.png' ;
import Filter2Image from '../../assets/email_deliverability/filter_2.png' ;
import Filter3Image from '../../assets/email_deliverability/filter_3.png' ;
import Filter4Image from '../../assets/email_deliverability/filter_4.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/HowFilter.styles';
import {useTheme} from '@mui/styles';

const HowFilter = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    const howFilterList = [
        {
            title : 'This is how you avoid spam filters',
            descp : <>
                <Box>
                    Just like athletes need to warm up before a game, your domain needs to warm up before you start sending campaigns. With lemwarm, you'll quickly achieve the perfect delivery and your emails will never go to spam again. Best part? It's 100% automatic.
                </Box>
                <Button variant='contained' >Learn more about lemwarm</Button>
            </>,
            img : Filter1Image
        },
        {
            title : "Watch your open rate blow up",
            descp : "Wondering what a good open rate is for cold emails? It's 50%. Anything below that and you might have a deliverability problem. When you google \"lemlist reviews\" you'll see how we can help you hit 50%+ open rates on regular basis.",
            img : Filter2Image
        },
        {
            title : "Send emails on your schedule without getting penalized",
            descp : "Stop sending one-time blasts that hurt your reputation and push your emails to Promotions. Let lemlist deliver them according to the rules while you stay in control of scheduling.",
            img : Filter3Image
        },
        {
            title : "One small step for you, one giant leap for your deliverability",
            descp : "Tracking links and opens impacts email deliverability, especially for gSuite users. But fear not! You don't have to sacrifice data. We'll help you measure engagement without any restrictions.",
            img : Filter4Image
        }
    ]

    return (
        <Box className={classes.root}>
            {/* <Grid container>
                {
                    howFilterList.map((filterItem, index) => (
                        <Grid item xs={12} key={index} className={classes.filterDiv}>
                            <Box className={classes.titleDiv}>{filterItem.title}</Box>
                            <Box className={classes.descpDiv}>{filterItem.descp}</Box>
                            <img src={filterItem.img} className={classes.FilterImageCss}/>
                        </Grid>
                    ))
                }
            </Grid> */}

            <Grid container>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box>
                    {
                        howFilterList.map((item, index) => (
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

export default HowFilter ;