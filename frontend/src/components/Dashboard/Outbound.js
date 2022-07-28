import * as React from 'react';

import Image1 from '../../assets/dashboard/1.png' ;
import Image1_1 from '../../assets/dashboard/1_1.png' ;
import Image2_1 from '../../assets/dashboard/2_1.png' ;
import Image2 from '../../assets/dashboard/2.jpg' ;
import Image3 from '../../assets/dashboard/3.png' ;
import Image3_1 from '../../assets/dashboard/3_1.png' ;
import Image4_1 from '../../assets/dashboard/4_1.png' ;
import Image4 from '../../assets/dashboard/4.jpg' ;

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

import { useStyles } from './StyledDiv/Outbound.styles';
import {useTheme} from '@mui/styles';

const Outbound = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    return (
        <Box className={classes.root}>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold'}}>
                    All-in-one outbound solution
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent : 'center', mb : '30px'}}>
                    <Box sx={{textAlign : 'center', fontSize : '20px', color : '#333', maxWidth : '650px'}}>
                        From teams of 2 to 200+, lemlist solves every outreach automation challenge.
                    </Box>
                </Grid>
            </Grid>
            <Grid container className={classes.listDiv} spacing={5}>
                {/*  */}
                <Grid item xs={6} >
                    <img src={Image1} />
                </Grid>
                <Grid item xs={6}>
                    <img src={Image1_1} style={{maxWidth : '330px'}}/>
                    <Box className={classes.sectionTitleDiv}>
                        Personalize emails at scale
                    </Box>
                    <Box className={classes.sectionDesDiv}>
                        Increase your reply reates by communicating withevery prospect on a 1-on-1 level.
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <Box className={classes.iconDiv}>
                            <EditIcon />
                        </Box>
                        <Box sx={{fontSize : '15px'}}>
                            Write custom intro lines and call-to-actions
                        </Box>
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <Box className={classes.iconDiv}>
                            <ImageIcon />
                        </Box>
                        <Box sx={{fontSize : '15px'}}>
                            Automatically put any screenshot, custom text, or company logos onto images in your emails
                        </Box>
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <Box className={classes.iconDiv}>
                            <PlayArrowIcon />
                        </Box>
                        <Box sx={{fontSize : '15px'}}>
                            Add dynamic landing pages and embed videos
                        </Box>
                    </Box>
                    <Button variant={'contained'}>Cold email platform</Button>
                </Grid>

                {/*  */}
                <Grid item xs={6} >
                    <Box className={classes.sectionTitleDiv}>
                        Automate follow-ups
                    </Box>
                    <Box className={classes.sectionDesDiv}>
                        Launch powerful cold email sequences, send follow-ups that don't feel generic, and open more opportunities for your business.
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <img src={Image2}  />
                        <Box sx={{fontSize : '15px'}}>
                            "We had massive success using lemlist to grow our sales pipeline." - Gabriel Frasconi, @Zendesk
                        </Box>
                    </Box>
                    <Button variant={'contained'}>Start for free</Button>
                </Grid>
                <Grid item xs={6}>
                    <img src={Image2_1} />
                </Grid>

                {/*  */}
                <Grid item xs={6}>
                    <img src={Image3} />
                </Grid>
                <Grid item xs={6}>
                    <img src={Image1_1} style={{maxWidth : '330px'}}/>
                    <Box className={classes.sectionTitleDiv}>
                        Sales engagement platform
                    </Box>
                    <Box className={classes.sectionDesDiv}>
                        Close more deals by engaging with your leads across multiple channels on autopilot.
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <Box className={classes.iconDiv}>
                            <LocalPhoneIcon />
                        </Box>
                        <Box sx={{fontSize : '15px'}}>
                            Write custom intro lines and call-to-actions
                        </Box>
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <Box className={classes.iconDiv}>
                            <DoneIcon />
                        </Box>
                        <Box sx={{fontSize : '15px'}}>
                            Automatically put any screenshot, custom text, or company logos onto images in your emails
                        </Box>
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <Box className={classes.iconDiv}>
                            <SupervisorAccountIcon />
                        </Box>
                        <Box sx={{fontSize : '15px'}}>
                            Add dynamic landing pages and embed videos
                        </Box>
                    </Box>
                    <Button variant={'contained'}>Multichannel outreach</Button>
                </Grid>

                {/*  */}
                <Grid item xs={6}>
                    <Box className={classes.sectionTitleDiv}>
                        Keep your emails out of spam
                    </Box>
                    <Box className={classes.sectionDesDiv}>
                        Increase your open rates by automatically warming up your email domain with lemwarm.
                    </Box>
                    <Box className={classes.iconListDiv}>
                        <img src={Image4}  />
                        <Box sx={{fontSize : '15px'}}>
                            "We had massive success using lemlist to grow our sales pipeline." - Gabriel Frasconi, @Zendesk
                        </Box>
                    </Box>
                    <Button variant={'contained'}>Start for free</Button>
                </Grid>
                <Grid item xs={6}>
                    <img src={Image4_1} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Outbound ;