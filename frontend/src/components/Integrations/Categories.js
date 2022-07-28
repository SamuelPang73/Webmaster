import * as React from 'react';

import SalesForce from '../../assets/integrations/navbar/salesforce.jpg' ;
import Hubspot from '../../assets/integrations/navbar/hubspot.png' ;
import PipeDrive from '../../assets/integrations/navbar/pipedrive.png' ;
import Axonaut from '../../assets/integrations/navbar/axonaut.png' ;
import Other from '../../assets/integrations/navbar/other.png' ;
import DropContract from '../../assets/integrations/navbar/dropcontact.jpeg' ;
import Uplead from '../../assets/integrations/navbar/up.png' ;
import LeadFuze from '../../assets/integrations/navbar/leadfuze.png' ;
import Bouncer from '../../assets/integrations/navbar/bouncer.png' ;
import DeBounce from '../../assets/integrations/navbar/debounce.png' ;
import LeadCamp from '../../assets/integrations/navbar/leadcamp.png' ;
import Pharow from '../../assets/integrations/navbar/pharow.png' ;
import PhantomBuster from '../../assets/integrations/navbar/phantom.png';
import AlbaCross from '../../assets/integrations/navbar/albacross.png' ;
import AirCall  from '../../assets/integrations/navbar/aircall.png' ;
import DroyD from '../../assets/integrations/navbar/droyd.png' ;
import Pabbly from '../../assets/integrations/navbar/pabbly.png' ;
import SalesMsg from '../../assets/integrations/navbar/salesmsg.png' ;
import Slack from '../../assets/integrations/navbar/slack.png' ;
import GoogleDrive from '../../assets/integrations/navbar/googledrive.png' ;
import FacebookAds from '../../assets/integrations/navbar/facebook.png' ;
import LinkedinAds from '../../assets/integrations/navbar/linkedin.png' ;
import Funnels from '../../assets/integrations/navbar/funnels.png' ;
import Asana from '../../assets/integrations/navbar/asana.png' ;
import Trello from '../../assets/integrations/navbar/trello.png' ;

import { 
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Categories.styles';

const Categories = () => {
    const classes = useStyles() ;

    const crmRef = React.useRef() ;
    const leadRef = React.useRef() ;
    const growRef = React.useRef() ;
    const zapierRef = React.useRef() ;
    const hookRef = React.useRef() ;
    const scrollRef = React.useRef() ;

    const crmsList = [
        {
            img : SalesForce,
            name : "SalesForce",
            width : 120
        },
        {
            img : Hubspot,
            name : "Hubspot",
            width : 120
        },
        {
            img : PipeDrive,
            name : 'Pipedrive',
            width : 120
        },
        {
            img : Axonaut,
            name : 'Axonaut',
            width : 120
        },
        {
            img : Other,
            name : 'Other CRMs',
            width : 120
        }
    ]

    const leadgenList = [
        {
            img : DropContract,
            name : "Dropcontact"
        },
        {
            name : 'Uplead',
            img : Uplead
        },
        {
            name : 'LeadFuze',
            img : LeadFuze
        },
        {
            name : 'Bouncer',
            img : Bouncer
        },
        {
            name : 'DeBounce',
            img : DeBounce
        },
        {
            name : 'Leadcamp',
            img : LeadCamp
        },
        {
            name : 'Pharow',
            img : Pharow
        }
    ]

    const growthList = [
        {
            name : "Phantombuster",
            img : PhantomBuster 
        },
        {
            name : 'Albacross',
            img : AlbaCross
        },
        {
            name : 'Aircall',
            img : AirCall
        },
        {
            name : 'More ides',
            img : Other
        },
        {
            name : 'Droyd',
            img : DroyD
        },
        {
            name : 'Pabbly Connect',
            img : Pabbly
        },
        {
            name : 'Salesmsg',
            img : SalesMsg
        }
    ]

    const zapierList = [
        {
            name : "Slack",
            img : Slack
        },
        {
            name : 'Google Drive',
            img : GoogleDrive
        },
        {
            name : 'Facebook Ads',
            img : FacebookAds
        },
        {
            name : 'Linkedin Ads',
            img : LinkedinAds
        },
        {
            name : 'Funnels',
            img : Funnels
        },
        {
            name : 'Asana',
            img : Asana
        },
        {
            name : 'Trello',
            img : Trello
        },
        {
            img : Other,
            name : 'More than 1,000 apps'
        }
    ]

    const hookList = [
        {
            name : "Push opportunities in Slack",
            img : Slack
        },
        {
            name : "Reply notifications",
            img : Slack
        },
        {
            name : "Engagement notifications",
            img : Slack
        },
    ]

    const scrollDown = (ref) => {
        scrollRef.current.scrollTo({
          top: ref.current.offsetTop - 350,
          behavior: 'smooth',
        });
    };

    return (
        <Grid container spacing={5} sx={{pt : '80px', background : 'white', pb : '40px'}}>
            <Grid item xs={12} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column',}}>
                <Box sx={{fontSize : '48px', fontWeight: 'bold', textAlign : 'center'}}>
                    Integrations
                </Box>
                <Box sx={{fontSize : '20px', mb : '20px', mt : '10px', textAlign : 'center', maxWidth : '940px'}}>
                    Connect lemlist with your favorite tools
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={3} sx={{display : 'flex', justifyContent: 'flex-end'}}>
                        <Box className={classes.navbarDiv}>
                            <Box sx={{fontWeight : 'bold', fontSize : '20px', mb : '15px'}}>
                                Categories
                            </Box>
                            <Box className={classes.navItemDiv}
                                onClick={() => scrollDown(crmRef)}
                            >
                                CRMs
                            </Box>
                            <Box className={classes.navItemDiv}
                                onClick={() => scrollDown(leadRef)}
                            >
                                Lead gen
                            </Box>
                            <Box className={classes.navItemDiv}
                                onClick={() => scrollDown(growRef)}
                            >
                                Growth
                            </Box>
                            <Box className={classes.navItemDiv}
                                onClick={() => scrollDown(zapierRef)}
                            >
                                Zapier
                            </Box>
                            <Box className={classes.navItemDiv}
                                onClick={() => scrollDown(hookRef)}
                            >
                                Slack webhooks
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box className={classes.scrollDiv} ref={scrollRef}>
                            <Box className={classes.refDiv} ref={crmRef}>
                                <Box sx={{fontSize : '25px', fontWeight:'bold', mb:'15px'}}>
                                    CRMs
                                </Box>
                                <Box className={classes.categoryDiv}>
                                    
                                    {
                                        crmsList.map((crm, index) => (
                                            <Box key={index} className={classes.itemDiv}>
                                                <img src={crm.img} width={60} height={50}/>
                                                <Box className={classes.labelDiv}>
                                                    { crm.name }
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box className={classes.refDiv} ref={leadRef}>
                                <Box sx={{fontSize : '25px', fontWeight:'bold', mb:'15px'}}>
                                    Lead gen
                                </Box>
                                <Box className={classes.categoryDiv}>
                                    
                                    {
                                        leadgenList.map((lead, index) => (
                                            <Box key={index} className={classes.itemDiv}>
                                                <img src={lead.img} width={60} height={50}/>
                                                <Box className={classes.labelDiv}>
                                                    { lead.name }
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box className={classes.refDiv} ref={growRef}>
                                <Box sx={{fontSize : '25px', fontWeight:'bold', mb:'15px'}}>
                                    Growth
                                </Box>
                                <Box className={classes.categoryDiv}>
                                    {
                                        growthList.map((growth, index) => (
                                            <Box key={index} className={classes.itemDiv}>
                                                <img src={growth.img} width={60} height={50}/>
                                                <Box className={classes.labelDiv}>
                                                    { growth.name }
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box className={classes.refDiv} ref={zapierRef}>
                                <Box sx={{fontSize : '25px', fontWeight:'bold', mb:'15px'}}>
                                    Zapier
                                </Box>
                                <Box className={classes.categoryDiv}>
                                    {
                                        zapierList.map((zapier, index) => (
                                            <Box key={index} className={classes.itemDiv}>
                                                <img src={zapier.img} width={60} height={50}/>
                                                <Box className={classes.labelDiv}>
                                                    { zapier.name }
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box className={classes.refDiv} ref={hookRef}>
                                <Box sx={{fontSize : '25px', fontWeight:'bold', mb:'15px'}}>
                                    Slack webhooks
                                </Box>
                                <Box className={classes.categoryDiv}>
                                    {
                                        hookList.map((hook, index) => (
                                            <Box key={index} className={classes.itemDiv}>
                                                <img src={hook.img} width={60} height={50}/>
                                                <Box className={classes.labelDiv}>
                                                    { hook.name }
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Categories ;