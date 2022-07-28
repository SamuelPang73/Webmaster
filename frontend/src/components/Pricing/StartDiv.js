import * as React from 'react';

import clsx from 'clsx' ;

import CheckIcon from '@mui/icons-material/Check';

import {
    Box,
    Grid,
    Button,
    ButtonGroup
} from '@mui/material' ;

import { useStyles } from './StyledDiv/StartDiv.styles';
import { useTheme } from '@mui/styles';

const StartDiv = () => {
    const classes = useStyles() ;
    const theme =  useTheme() ;

    const warmUpList = [
        "Warm up any email domain",
        "Email deliverability booster",
        "Real people, no fase accounts",
        "25+ years domain age range"
    ]

    const outreachList = [
        "Personalization at scale",
        "Automate follow-ups",
        "Invite teams",
        "Pipedrive, Hubspot, Salesforce",
        "Integrations + API"
    ]

    const engagementList = [
        "LinkedIn workflows",
        "Video propecting",
        "LinkedIn extension + enrichment",
        "Custom landing pages",
        "Email enrichment",
        "Cold calls"
    ]

    const outreachSmList  = [
        "Cold Email masterclass",
        "G's Private community"
    ]
    
    const engagementSmList = [
        "LinkedIn masterclass",
        "Cold Email masterclass",
        "G's Private community"
    ]

    const [selectedItem, setSelectedItem] = React.useState('monthly') ;

    return (
        <Grid container spacing={5} sx={{pt : '80px'}}>
            <Grid item xs={12} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column',}}>
                <Box sx={{fontSize : '48px', fontWeight: 'bold', textAlign : 'center'}}>
                    Try lemlist for free 🚀
                </Box>
                <Box sx={{fontSize : '20px', mb : '20px', mt : '10px', textAlign : 'center', maxWidth : '940px'}}>
                    You're a lead generation agency? <a href={'#'}>Explore lemlist for agencies</a>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'center', gap : '30px'}}>
                    <ButtonGroup>
                        <Button  className={classes.buttonCss} onClick={() => setSelectedItem('monthly')}
                            sx={{background : selectedItem === 'monthly' && theme.palette.primary.main + " !important"}}
                        >Pay monthly</Button>
                        <Button className={classes.buttonCss} onClick={() => setSelectedItem('special')}
                            sx={{background : selectedItem === 'special' && theme.palette.primary.main + " !important"}}
                        >Special Offer 🎁</Button>
                    </ButtonGroup>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                <Box sx={{maxWidth : '1200px'}}>
                    {
                        selectedItem === 'monthly' && <Grid container spacing={3}>
                            <Grid item xs={4} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                                <Box className={classes.cardDiv} sx={{borderTop : '4px solid #03aff5'}}>
                                    <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                                        <Box className={classes.titleDiv}>
                                            Email warm-up
                                        </Box>
                                        <Box className={classes.descpDiv}>
                                            Warm up any domain on autopilot and stay out of spam forever
                                        </Box>
                                        <Box className={classes.priceDiv}>
                                            <Box className={clsx(classes.priceValue, classes.color1)}>
                                                $29
                                            </Box>
                                            <Box className={classes.labelDiv}>
                                                per month
                                            </Box>
                                        </Box>
                                        <Button variant='contained' className={classes.bg1}>Get Started</Button>
                                        <Box className={classes.listDiv}>
                                            {
                                                warmUpList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                        <Box className={clsx(classes.checkDiv, classes.bg1)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        *Additional taxes may apply depending on country
                                        ** Email warm-up is available as a paid plan only
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{display : 'flex', justifyContent : 'center'}}>
                                <Box className={classes.cardDiv} sx={{borderTop : '4px solid #4569eb'}}>
                                    <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                                        <Box className={classes.titleDiv}>
                                            Email outreach
                                        </Box>
                                        <Box className={classes.descpDiv}>
                                            Send personalized email outreach campaigns at scale
                                        </Box>
                                        <Box className={classes.priceDiv}>
                                            <Box className={clsx(classes.priceValue, classes.color2)}>
                                                $59
                                            </Box>
                                            <Box className={classes.labelDiv}>
                                                per user per month
                                            </Box>
                                        </Box>
                                        <Button variant='contained' className={classes.bg2}>Try it free</Button>
                                        <Box className={classes.listTitleDiv}>Email warm-up features, plus:</Box>
                                        <Box className={classes.listDiv}>
                                            {
                                                outreachList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                        <Box className={clsx(classes.checkDiv, classes.bg2)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        *Additional taxes may apply depending on country
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                                <Box className={classes.cardDiv} sx={{borderTop : '4px solid #ff9a3f'}}>
                                    <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                                        <Box className={classes.titleDiv}>
                                            Sales engagement
                                        </Box>
                                        <Box className={classes.descpDiv}>
                                            Talk to prospects across email, LinkedIn, and phone
                                        </Box>
                                        <Box className={classes.priceDiv}>
                                            <Box className={clsx(classes.priceValue, classes.color3)}>
                                                $99
                                            </Box>
                                            <Box className={classes.labelDiv}>
                                                per user per month
                                            </Box>
                                        </Box>
                                        <Button variant='contained' className={classes.bg3}>Try it free</Button>
                                        <Box className={classes.listTitleDiv}>Email outreach features, plus:</Box>
                                        <Box className={classes.listDiv}>
                                            {
                                                engagementList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                        <Box className={clsx(classes.checkDiv, classes.bg3)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        *Additional taxes may apply depending on country
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    }
                    {
                        selectedItem === 'special' && <Grid container spacing={3}>
                            <Grid item xs={4} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                                <Box className={classes.cardDiv} sx={{borderTop : '4px solid #03aff5'}}>
                                    <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                                        <Box className={classes.titleDiv}>
                                            Email warm-up
                                        </Box>
                                        <Box className={classes.descpDiv}>
                                            Warm up any domain on autopilot and stay out of spam forever
                                        </Box>
                                        <Box className={classes.priceDiv}>
                                            <Box className={clsx(classes.priceValue, classes.color1)}>
                                                <span style={{textDecorationLine : 'line-through', color : 'gray', fontWeight : 'normal', fontSize : '35px'}}>$25</span>
                                                $29
                                            </Box>
                                            <Box className={classes.labelDiv}>
                                                per month billed annually
                                            </Box>
                                        </Box> 
                                        <Button variant='contained' className={classes.bg1}>Get Started</Button>
                                        <Box className={classes.listDiv}>
                                            {
                                                warmUpList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                         <Box className={clsx(classes.checkDiv, classes.bg1)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        * Additional taxes may apply depending on country
                                        ** Email warm-up is available as a paid plan only
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{display : 'flex', justifyContent : 'center'}}>
                                <Box className={classes.cardDiv} sx={{borderTop : '4px solid #4569eb'}}>
                                    <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                                        <Box className={classes.titleDiv}>
                                            Email outreach
                                        </Box>
                                        <Box className={classes.descpDiv}>
                                            Send personalized email outreach campaigns at scale
                                        </Box>
                                        <Box className={classes.priceDiv}>
                                            <Box className={clsx(classes.priceValue, classes.color2)}>
                                                <span style={{textDecorationLine : 'line-through', color : 'gray', fontWeight : 'normal', fontSize : '35px'}}>$59</span>
                                                $50
                                            </Box>
                                            <Box className={classes.labelDiv}>
                                                per user / month billed annually
                                            </Box>
                                        </Box> 
                                        <Button variant='contained' className={classes.bg2}>Try it free</Button>
                                        <Box className={classes.listTitleDiv}>Email warm-up features, plus:</Box>
                                        <Box className={classes.listDiv}>
                                            {
                                                outreachList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                        <Box className={clsx(classes.checkDiv, classes.bg2)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                        <Box className={classes.smListTitle}>Special offer for &nbsp;
                                            <span style={{textDecorationLine : 'line-through', color : 'gray', fontWeight : 'normal', fontSize : '20px'}}>$797&nbsp;</span> 
                                            <span style={{color : 'gray', fontWeight : 'normal', fontSize : '20px', color : '#037e10'}}>FREE</span>
                                        </Box>
                                        <Box className={classes.smListDiv}>
                                            {
                                                outreachSmList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                         <Box className={clsx(classes.checkDiv, classes.bg2)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        * Additional taxes may apply depending on country
                                        ** Masterclass is not available during free trial
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                                <Box className={classes.cardDiv} sx={{borderTop : '4px solid #ff9a3f'}}>
                                    <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                                        <Box className={classes.titleDiv}>
                                            Sales engagement
                                        </Box>
                                        <Box className={classes.descpDiv}>
                                            Talk to prospects across email, LinkedIn, and phone
                                        </Box>
                                        <Box className={classes.priceDiv}>
                                            <Box className={clsx(classes.priceValue, classes.color3)}>
                                                <span style={{textDecorationLine : 'line-through', color : 'gray', fontWeight : 'normal', fontSize : '35px'}}>$99</span>
                                                $83
                                            </Box>
                                            <Box className={classes.labelDiv}>
                                                per user / month billed annually
                                            </Box>
                                        </Box>
                                        <Button variant='contained' className={classes.bg3}>Try it free</Button>
                                        <Box className={classes.listTitleDiv}>Email outreach features, plus:</Box>
                                        <Box className={classes.listDiv}>
                                            {
                                                engagementList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                         <Box className={clsx(classes.checkDiv, classes.bg3)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                        <Box className={classes.smListTitle}>Special offer for &nbsp;
                                            <span style={{textDecorationLine : 'line-through', color : 'gray', fontWeight : 'normal', fontSize : '20px'}}>$1,694&nbsp;</span> 
                                            <span style={{color : 'gray', fontWeight : 'normal', fontSize : '20px', color : '#037e10'}}>FREE</span>
                                        </Box>
                                        <Box className={classes.smListDiv}>
                                            {
                                                engagementSmList.map((item, index) => (
                                                    <Box className={classes.itemDiv} key={index}>
                                                         <Box className={clsx(classes.checkDiv, classes.bg3)}>
                                                            <CheckIcon />
                                                        </Box>
                                                        {item}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        * Additional taxes may apply depending on country
                                        ** Masterclasses are not available during free trial
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default StartDiv ;