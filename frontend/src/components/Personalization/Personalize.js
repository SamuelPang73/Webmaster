import * as React from 'react';

import Text1Image from '../../assets/personalization/text/text_1.png' ;
import Text2Image from '../../assets/personalization/text/text_2.png' ;
import Text3Image from '../../assets/personalization/text/text_3.png' ;
import Text4Image from '../../assets/personalization/text/text_4.png' ;

import Image1 from '../../assets/personalization/images/image_1.jpg' ;
import Image2 from '../../assets/personalization/images/image_2.jpg' ;
import Image3 from '../../assets/personalization/images/image_3.jpg' ;
import Image4 from '../../assets/personalization/images/image_4.jpg' ;

import Video1Image from '../../assets/personalization/video/video_1.jpg' ;
import Video2Image from '../../assets/personalization/video/video_2.jpg' ;
import Video3Image from '../../assets/personalization/video/video_3.jpg' ;

import Funnel1Image from '../../assets/personalization/video/funnels/funnel_1.png' ;
import Funnel2Image from '../../assets/personalization/video/funnels/funnel_2.png' ;
import Funnel3Image from '../../assets/personalization/video/funnels/funnel_3.png' ;
import Funnel4Image from '../../assets/personalization/video/funnels/funnel_4.png' ;

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import clsx from 'clsx' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Personalize.styles';
import {useTheme} from '@mui/styles';

const Personalize = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    const [selectedItem, setSelectedItem] = React.useState('text') ;
    const [selectedFunnel, setSelectFunnel] = React.useState('boot') ;

    const textPersonalizeList = [
        {
            title : 'From now on, every email you send will stand out',
            descp : <>
                <Box>
                    Write custom intro lines, genuine compliments and catchy call-to-actions. Communicate on a 1-on-1 level.
                </Box>
            </>,
            img : Text1Image
        },
        {
            title : "Hold on... liquid what?",
            descp : <>
                <Box>Liquid syntax. For example, say you want to use custom intro lines for five different audience verticals. Liquid syntax gives you an easy way to get the job done.,</Box>
                <Box className={classes.seeLinkDiv}>See how it works <ArrowRightAltIcon/></Box>
            </>,
            img : Text2Image
        },
        {
            title : "Spin syntax magic",
            descp : <>
                <Box>For instance, let lemlist randomly run variations of your greetings. Make things a bit more diverse and a lot more human.</Box>
                <Box className={classes.seeLinkDiv}>See how it works <ArrowRightAltIcon/></Box>
            </>,
            img : Text3Image
        },
        {
            title : "Go the extra mile before you press send",
            descp : <>
                <Box>Make last-minute changes for prospects who need extra personalisation. Imagine writing to Elon Musk and you want to modify one sentence just for him.</Box>
            </>,
            img : Text4Image
        },
    ]

    const imagePersonalizeList = [
        {
            title : 'Text on images done automatically',
            descp : <>
                <Box>
                    Add the prospect’s name or any other text to an image. Send everyone an email that grabs attention.
                </Box>
            </>,
            img : Image1
        },
        {
            title : "Throw in their company logo too",
            descp : <>
                <Box>Include prospects' company logos in your campaign. Really effective when you want to send a tailored message.</Box>
            </>,
            img : Image2
        },
        {
            title : "Add their LinkedIn and website screenshots",
            descp : <>
                <Box>There is no limit to your creativity, you can do whatever comes to mind! For example, you can take a screenshot of their LinkedIn profile like this...</Box>
            </>,
            img : Image3
        },
        {
            title : "Make your click rate explode with this tactic",
            descp : <>
                <Box>Sending personalized video thumbnails is an amazing tactic. How does it work? Take an image, input custom text, add a play button and link it to your video. Watch the clicks skyrocket.</Box>
            </>,
            img : Image4
        },
    ]

    const videoPersonalizeList = [
        {
            title : "Turn emails into qualified meetings",
            descp : <>
                <Box>Build custom landing pages for your sales funnel in less than two minutes. Without writing a single line of code.</Box>
                <Box className={classes.seeLinkDiv}>Discover how easy it is <ArrowRightAltIcon/></Box>
            </>,
            img : Video1Image
        },
        {
            title : "WOW your prospects with videos",
            descp : <>
                <Box>YouTube, Vimeo, Loom, Vidyard… embed any video on a landing page and deliver highly-targeted messages to your leads.</Box>
            </>,
            img : Video2Image
        },
        {
            title : "The best way to book 2x more meetings",
            descp : <>
                <Box>Let your prospects schedule meetings directly from your landing page. Embed Calendly and eliminate friction for good.</Box>
            </>,
            img : Video3Image
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{fontSize : '40px', fontWeight:'bold', textAlign : 'center'}}>
                        Personalize cold emails at scale
                    </Box>
                    <Box sx={{fontSize: '24px', textAlign:'center', mt : '20px'}}>
                        Pick your outreach strategy 👇
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center', mt:'20px', mb : '70px'}}>
                    <Box className={classes.selectDiv}>
                        <Box className={clsx(classes.selectedItemDiv, selectedItem === 'text' && classes.active)}
                            onClick={() => setSelectedItem('text')}
                        >
                            Text Personalization
                        </Box>
                        <Box className={clsx(classes.selectedItemDiv, selectedItem === 'images' && classes.active)}
                            onClick={() => setSelectedItem('images')}
                        >
                            personalized images
                        </Box>
                        <Box className={clsx(classes.selectedItemDiv, selectedItem === 'video' && classes.active)}
                            onClick={() => setSelectedItem('video')}
                        >
                            Landing page + video
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                {
                    selectedItem === 'text' && <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                        <Box >
                        {
                            textPersonalizeList.map((item, index) => (
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
                }
                {
                    selectedItem === 'images' && <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                        <Box >
                        {
                            imagePersonalizeList.map((item, index) => (
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
                }
                {
                    selectedItem === 'video' && <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                        <Box >
                        {
                            videoPersonalizeList.map((item, index) => (
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
                }
                {
                    selectedItem === 'video' && <>
                        <Grid item xs={12} sx={{display : 'flex !important', flexDirection : 'column !important', alignItems:'center'}}>
                            <Box sx={{fontSize : '35px', fontWeight :'bold', textAlign  :'center', maxWidth : '940px'}}>
                                How people like you are building amazing sales funnels
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.funnelsList}>
                                <Box className={clsx(classes.funnelItem, selectedFunnel === 'boot' && classes.funnelActive)}
                                    onClick={() => setSelectFunnel('boot')}
                                >
                                    Boot sales
                                </Box>
                                <Box className={clsx(classes.funnelItem, selectedFunnel === 'grow' && classes.funnelActive)}
                                    onClick={() => setSelectFunnel('grow')}
                                >
                                    Grow communities
                                </Box>
                                <Box className={clsx(classes.funnelItem, selectedFunnel === 'send' && classes.funnelActive)}
                                    onClick={() => setSelectFunnel('send')}
                                >
                                    Send surveys
                                </Box>
                                <Box className={clsx(classes.funnelItem, selectedFunnel === 'organize' && classes.funnelActive)}
                                    onClick={() => setSelectFunnel('organize')}
                                >
                                    Organize events
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{display : 'flex', justifyContent:'center', mt : '30px'}}>
                            {
                                selectedFunnel === 'boot' && <img src={Funnel1Image} />
                            }
                            {
                                selectedFunnel === 'grow' && <img src={Funnel2Image} />
                            }
                            {
                                selectedFunnel === 'send' && <img src={Funnel3Image} />
                            }
                            {
                                selectedFunnel === 'organize' && <img src={Funnel4Image} />
                            }
                        </Grid>
                        <Grid item xs={12} sx={{display : 'flex', justifyContent:'center', mt: '20px'}}>
                            <Button variant='contained'>Build your first funnel for free</Button>
                        </Grid>
                    </>
                }
            </Grid>
        </Box>
    )
}

export default Personalize ;