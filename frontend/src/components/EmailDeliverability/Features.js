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
                            Check your email health
                        </Box>
                        <Box className={classes.descpDiv}>
                            When in doubt, run a quick audit and see where your emails will land. Get advice on how to improve your sender score.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            😎
                        </Box>
                        <Box className={classes.titleDiv}>
                            Pull warm-up emails out of spam
                        </Box>
                        <Box className={classes.descpDiv}>
                            In case your lemwarm emails are caught up by spam or promotion filters, we'll pull them back into the primary inbox.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            💻
                        </Box>
                        <Box className={classes.titleDiv}>
                            No HTML stuff
                        </Box>
                        <Box className={classes.descpDiv}>
                            A simple-to-use text editor to write your emails and add signatures in peace. No coding skills required.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                    <Box className={classes.featureDiv}>
                        <Box className={classes.emojiDiv}>
                            ⚠️
                        </Box>
                        <Box className={classes.titleDiv}>
                            Set sending limits for your team
                        </Box>
                        <Box className={classes.descpDiv}>
                            Managing a team? Use daily limits to never send more than a desired amount of emails across the entire team.
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Features ;