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

import { useStyles } from './StyledDiv/Features.styles';

const Features = () => {
    const classes = useStyles() ;

    return (
        <>
            <Grid container sx={{mt : '60px', mb : '70px'}} spacing={2}>
                <Grid item xs={12} sx={{textAlign: 'center', fontWeight:'bold', fontSize : '40px'}}>
                    Additional features you will love
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            🚑
                        </Box>
                        <Box className={classes.titleDiv}>
                            Set email delays
                        </Box>
                        <Box className={classes.descpDiv}>
                            Pick the ideal delay between every email in your sequence.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            👀
                        </Box>
                        <Box className={classes.titleDiv}>
                            Receive instant notifications
                        </Box>
                        <Box className={classes.descpDiv}>
                            Get alerts as soon as someone replies to your message.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            🔬
                        </Box>
                        <Box className={classes.titleDiv}>
                            Run A/B tests
                        </Box>
                        <Box className={classes.descpDiv}>
                            Find what follow-up strategy works best by split testing two templates.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            ⚙️
                        </Box>
                        <Box className={classes.titleDiv}>
                            Connect your CRM in seconds
                        </Box>
                        <Box className={classes.descpDiv}>
                            Need to sync lemlist with your Pipedrive, Hubspot or Salesforce? No problem.
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Features ;