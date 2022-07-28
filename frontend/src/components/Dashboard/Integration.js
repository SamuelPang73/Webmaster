import * as React from 'react';

import Image5 from '../../assets/dashboard/5.png' ;
import Image5_1 from '../../assets/dashboard/5_1.png' ;
import Image6 from '../../assets/dashboard/6.png' ;
import Image6_1 from '../../assets/dashboard/6_1.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Integration.styles';

const Integration = () => {
    const classes = useStyles() ;

    return (
        <>
            <Grid container sx={{mt : '60px', mb : '30px'}}>
                <Grid item xs={12} sx={{textAlign : 'center', fontSize : '45px', fontWeight : 'bold'}}>
                    When everything just clicks
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent : 'center', mb : '30px'}}>
                    <Box sx={{textAlign : 'center', fontSize : '20px', color : '#333', maxWidth : '650px'}}>
                        Outreach software that integrates with any workflow you want.
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Button variant={'contained'} className={classes.buttonCss}>Discover all integrations</Button>
                </Grid>
            </Grid>
            
            <Grid container className={classes.root} spacing={5}>
                
                <Grid item xs={6}>
                    <Box>
                        <img src={Image5} />
                        <Box className={classes.titleDiv}>
                            1-click integration with your email provider
                        </Box>
                        <Box className={classes.descpDiv}>
                            It doesn’t matter what email provider you use, we support all of them and it takes seconds to set everything up.
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <img src={Image5_1} />
                        <Box className={classes.titleDiv}>
                            Native integrations with Pipedrive, Hubspot, Salesforce
                        </Box>
                        <Box className={classes.descpDiv}>
                            Hook up your favorite CRM tool with lemlist and sync your entire sales team in seconds.
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <img src={Image6} />
                        <Box className={classes.titleDiv}>
                            Connect Aircall &amp; lemlist
                        </Box>
                        <Box className={classes.descpDiv}>
                            Call your leads directly from lemlist for your multichannel sequences. Turn your cold email tool into an outbound machine.
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <img src={Image6_1} />
                        <Box className={classes.titleDiv}>
                            All your favorite tools
                        </Box>
                        <Box className={classes.descpDiv}>
                            Zapier, email verification tools, Google Sheets, Calendly, Slack notifications... anything you can think of, we'll make it happen.
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Integration ;