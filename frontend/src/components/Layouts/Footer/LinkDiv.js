import * as React from 'react';

import {useNavigate} from 'react-router-dom' ;

import LemlistImage  from '../../../assets/dashboard/lemlist.png' ;

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/LinkDiv.styles';

const LinkDiv = () => {
    const classes = useStyles() ;
    const navigate = useNavigate() ;

    const productList = [
        {
            label :"Pricing",
            link : ""
        },
        {
            label : "lemwarm",
            link : ""
        },
        {
            label : "Deliverability",
            link : ""
        }, 
        {
            label  :"Personalization",
            link : ""
        },
        {
            label : "Follow-up emails",
            link : ""
        },
        {
            label  :"Sales engagement",
            link : ""
        },
        {
            label : "Integrations",
            link : ""
        }
    ]

    const usefulList = [
        {
            label :"Help",
            link : "/faq"
        },
        {
            label :"Career at lemlist",
            link : ""
        },
        {
            label : "lemlist Partners",
            link : ""
        },
        {
            label : "Privacy Policy & Legal",
            link : ""
        }, 
        {
            label  :"Terms",
            link : ""
        },
        {
            label : "lemlist DPA",
            link : ""
        },
        {
            label  :"lemlist Anti-Abuse",
            link : ""
        },
        {
            label : "Sending Policy",
            link : ""
        },
        {
            label : "Developer API",
            link : ""
        },
        {
            lable : "Status",
            link : ""
        }
    ]

    const resourcesList = [
        {
            link : "",
            label : "Cold email templates"
        },
        {
            link : "",
            label : "lemlist community"
        },
        {
            link : "",
            label : "Blog"
        },
        {
            link : "",
            label : "Video blog"
        },
        {
            link : "",
            label : "lemlist vs. alternatives"
        },
        {
            link : "",
            lable : "Help Center"
        }
    ]

    const salesList = [
        {
            link : "",
            label : "Master the art of cold emailing"
        },
        {
            link : "",
            label : "Linkedin Content Secrets"
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <img src={LemlistImage} height={24} />
                    <Box className={classes.socialList}>
                        <Box className={classes.socialDiv}>
                            <FacebookIcon />
                        </Box>
                        <Box className={classes.socialDiv}>
                            <YouTubeIcon />
                        </Box>
                        <Box className={classes.socialDiv}>
                            <LinkedInIcon />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box className={classes.titleDiv}>
                                Product
                            </Box>
                            <Box className={classes.linkListDiv}>
                                {
                                    productList.map((product, index) => (
                                        <Box className={classes.linkItemDiv} key={index}>
                                            { product.label }
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className={classes.titleDiv}>
                                Useful
                            </Box>
                            <Box className={classes.linkListDiv}>
                                {
                                    usefulList.map((useful, index) => (
                                        <Box className={classes.linkItemDiv} key={index}
                                            onClick={() => navigate(useful.link)}
                                        >
                                            { useful.label }
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className={classes.titleDiv}>
                                Resources
                            </Box>
                            <Box className={classes.linkListDiv}>
                                {
                                    resourcesList.map((resource, index) => (
                                        <Box className={classes.linkItemDiv} key={index}>
                                            { resource.label }
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className={classes.titleDiv}>
                                Learn sales
                            </Box>
                            <Box className={classes.linkListDiv}>
                                {
                                    salesList.map((sales, index) => (
                                        <Box className={classes.linkItemDiv} key={index}>
                                            { sales.label }
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        
    )
}

export default LinkDiv ;