import * as React from 'react';

import SalesForce from '../../assets/pricing/salesforce.png' ;
import HubSpot from '../../assets/pricing/hubspot.png' ;
import PipeDrive from '../../assets/pricing/pipedrive.png' ;
import Zapier from '../../assets/pricing/zapier.png' ;
import Slack from '../../assets/pricing/slack.png' ;
import GoogleDrive from '../../assets/pricing/googledrive.png' ;
import PhantomBuster from '../../assets/pricing/phantombuster.png' ;

import {
    Box,
    Grid,
    Button,
    ButtonGroup
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Integrate.styles';
import { useTheme } from '@mui/styles';

const Integrate = () => {
    const classes = useStyles() ;
    const theme =  useTheme() ;

    const integrationLinks = [
        {
            img : SalesForce,
            link : ""
        },
        {
            img : HubSpot,
            link : ""
        },
        {
            img : PipeDrive,
            link : ""
        },
        {
            img : Zapier,
            link : ""
        },
        {
            img : Slack,
            link : ""
        },
        {
            img : GoogleDrive,
            link : ""
        },
        {
            img : PhantomBuster,
            link : ""
        }
    ]

    return (
        <Grid container spacing={5} sx={{pt : '80px', pb : '70px'}}>
            <Grid item xs={12} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column',}}>
                <Box sx={{fontSize : '48px', fontWeight: 'bold', textAlign : 'center'}}>
                    Integrate any tool you love with lemlist
                </Box>
                <Box sx={{fontSize : '20px', mb : '20px', mt : '10px', textAlign : 'center', maxWidth : '940px'}}>
                    Connect your CRM, get instant notifications, receive leads from gSheets, and find prospects on LinkedIn — right within lemlist.
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                <Box className={classes.linkListDiv}>
                    {
                        integrationLinks.map((link, index) => (
                            <Box key={index} className={classes.linkDiv}>
                                <img src={link.img} width={170}/>
                            </Box>
                        ))
                    }
                    <Box className={classes.linkDiv}>
                        All integrations
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Integrate ;