import * as React from 'react';

import Image4 from '../../assets/dashboard/4.jpg' ;
import Image10 from '../../assets/dashboard/10.jpeg' ;
import Image11 from '../../assets/dashboard/11.png' ;
import Image12 from '../../assets/dashboard/12.jpg' ;
import Image13 from '../../assets/dashboard/13.jpg' ;
import Image14 from '../../assets/dashboard/14.jpg' ;
import Image15 from '../../assets/dashboard/15.jpg' ;
import Image16 from '../../assets/dashboard/16.jpg' ;
import Image17 from '../../assets/dashboard/17.jpg' ;
import Image18 from '../../assets/dashboard/18.jpg' ;
import Image19 from '../../assets/dashboard/19.jpg' ;
import Image20 from '../../assets/dashboard/20.jpg' ;
import Image21 from '../../assets/dashboard/21.jpg' ;
import Image22 from '../../assets/dashboard/22.jpg' ;
import Image23 from '../../assets/dashboard/23.jpg' ;
import PlatformImage from '../../assets/dashboard/platform.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Companies.styles';

const Companies = () => {
    const classes = useStyles() ;

    const itemList = [
        "Sales",
        "Saas",
        "Marketing",
        "Startups",
        "Recruiting"
    ]

    const salesList = [
        {
            img : Image4,
            text : "It’s so simple to use, easy to connect with your CRM and their automation features will save you a lot of time. We booked more meetings using lemlist compared to other tools we used in the past.",
            name : "Alla Zeitoun",
            nick : "Key Acc Manager @Meero"
        },
        {
            img : Image10,
            text : "lemlist is your cold email batmobile. Personalization, automation, deliverability... everything you need to get more replies is there.",
            name : "Nick Dunse",
            nick : "CMO @Shuttle"
        },
        {
            img : Image11,
            text : "We had massive success using lemlist to grow our sales pipeline. When you work with a good company and they help you become more successful, I can just highly recommend them.",
            name : "Gabriel Frasconi",
            nick : "SE Director @Zendesk"
        }
    ]

    const saasList = [
        {
            img : Image12,
            text : "If you’re serious about cold email and personalization, lemlist answers all of your burning questions.",
            name : "",
            nick : "Founder @Cloutly"
        },
        {
            img : Image13,
            text : "Thanks for your great solution and all your content updates, they are really helping us sell smarter through cold emails.",
            name : "",
            nick : "Co-Founder @elearnio"
        },
        {
            img : Image14,
            text : "Coffee cup email template is truly a great way to start the conversation with your prospects.",
            name : "",
            nick : "Sales Director @ Fortuna.ai"
        }
    ]

    const marketingList = [
        {
            img : Image13,
            text : "I'm a big advocate of relevant and value-oriented campaigns that are personalized for each prospect... and lemlist is my tool for the job.",
            name : "",
            nick : "Founder @Getleado"
        },
        {
            img : Image14,
            text : "If you're trying to get recurring revenue clients to grow a small and profitable agency, this is a predictable system to leverage.",
            name : "",
            nick : "Founder @Content Mavericks"
        },
        {
            img : Image15,
            text : "I was able to get in touch with the right people quickly and that one smart custom tag made a big difference, while lemlist made sure my deliverability was at a very high level.",
            name : "",
            nick : "CEO @Growth Gorilla"
        }
    ]

    const startupsList = [
        {
            img : Image16,
            text : "Personalization is key and lemlist empowers us with many features to allow a more human and fun email campaign.",
            name : "",
            nick : "COO @Shapr Talent"
        },
        {
            img : Image17,
            text : "lemlist personality features are the best on the market. You can personalize pictures, videos, and even the landing pages you are going to send your potential clients. The results of the cold email campaigns are astonishing!!!",
            name : "",
            nick : "LN Consultant & Strategist"
        },
        {
            img : Image18,
            text : "We're big fans of lemlist and their customization features. The impact they made on our campaigns is fantastic.",
            name : "",
            nick : "Founder & CEO @MyBizDev"
        }
    ]

    const recruitingList = [
        {
            img : Image19,
            text :"There are lots of cool and fun ideas that we wanted to test in cold email outreach. With lemlist, we were finally able to. I can't recommend them enough.",
            name : "",
            nick : "Senior Sourcer @Wayne Technologies"
        },
        {
            img : Image20,
            text :"My emails simply stand out amongst all that noise of emails we receive every day. Building relationships with top talents is much easier thanks to highly personalized emails.",
            name : "",
            nick : "Co-Founder @Sourcing Challenge"
        },
        {
            img : Image21,
            text : "This campaign was really cool and I love that it got such great results. Thank you lemlist for the help, couldn't do it without you.",
            name : "",
            nick : "Talent Sourcer @Snowflake"
        }
    ]


    const [selectedItem, setSelectedItem] = React.useState('Sales') ;

    return (
        <Box className={classes.root}>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold'}}>
                    Trusted by 10,000+ companies worldwide
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent :"center", mt : '20px'}}>
                    <Box className={classes.itemListDiv}>
                        {
                            itemList.map((item, index) => (
                                <a className={classes.itemDiv} key={index} onClick={() => setSelectedItem(item)}
                                    style={{color : item === selectedItem ? 'white' : 'lightgray'}}
                                >
                                    { item }
                                </a>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center', mt : '20px', mb : '100px'}}>
                    <Box className={classes.messageList}>
                        {
                            selectedItem === 'Sales' && salesList.map((item, index) => (
                                <Box className={classes.messageItem} key={index}>
                                    <Box className={classes.messageDiv}>{item.text}</Box>
                                    <Box className={classes.userDiv}>
                                        <img src={item.img} />
                                        <Box>
                                            <Box>
                                                {item.name}
                                            </Box>
                                            <Box>
                                                {item.nick}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                        {
                            selectedItem === 'Saas' && saasList.map((item, index) => (
                                <Box className={classes.messageItem} key={index}>
                                    <Box className={classes.messageDiv}>{item.text}</Box>
                                    <Box className={classes.userDiv}>
                                        <img src={item.img} />
                                        <Box>
                                            <Box>
                                                {item.name}
                                            </Box>
                                            <Box>
                                                {item.nick}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                        {
                            selectedItem === 'Marketing' && marketingList.map((item, index) => (
                                <Box className={classes.messageItem} key={index}>
                                    <Box className={classes.messageDiv}>{item.text}</Box>
                                    <Box className={classes.userDiv}>
                                        <img src={item.img} />
                                        <Box>
                                            <Box>
                                                {item.name}
                                            </Box>
                                            <Box>
                                                {item.nick}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                        {
                            selectedItem === 'Startups' && startupsList.map((item, index) => (
                                <Box className={classes.messageItem} key={index}>
                                    <Box className={classes.messageDiv}>{item.text}</Box>
                                    <Box className={classes.userDiv}>
                                        <img src={item.img} />
                                        <Box>
                                            <Box>
                                                {item.name}
                                            </Box>
                                            <Box>
                                                {item.nick}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                        {
                            selectedItem === 'Recruiting' && recruitingList.map((item, index) => (
                                <Box className={classes.messageItem} key={index}>
                                    <Box className={classes.messageDiv}>{item.text}</Box>
                                    <Box className={classes.userDiv}>
                                        <img src={item.img} />
                                        <Box>
                                            <Box>
                                                {item.name}
                                            </Box>
                                            <Box>
                                                {item.nick}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box sx={{maxWidth : '375px', fontSize : '22px', fontWeight : 'bold'}}>
                        The lemlist family consists of sales teams, startups, big enterprises, SaaS-ers, growth marketers, recruiters... and we're all waiting for you.
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src={PlatformImage} 
                        style={{width : '80%'}}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Companies ;