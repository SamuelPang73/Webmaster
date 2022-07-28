import * as React from 'react';

import {
    Box,
    Grid,
    TextField,
    InputAdornment,
} from '@mui/material' ;

import SearchIcon from '@mui/icons-material/Search' ;

const ContactDiv = () => {
    return (
        <Grid container sx={{pt : '70px', mb : '50px'}}>
            <Grid item xs={12} sx={{display : 'flex', justifyContent:'center'}}>
                <Box sx={{maxWidth : '940px'}}>
                    <Box sx={{fontSize : '48px', fontWeight: 'bold'}}>
                        lemlist Knowledge base
                    </Box>
                    <Box sx={{fontSize : '18px', mb : '20px', mt : '10px'}}>
                        Easily find the right help articles and video tutorials to help you use MailerLite, learn email marketing and much more.
                    </Box>
                    <TextField 
                        fullWidth
                        placeholder='    Find answers (subscribers, passwords, automation...)'
                        sx={{maxWidth : '500px'}}
                        InputProps={{
                            startAdornment : <InputAdornment position={'end'}>
                                <SearchIcon />
                            </InputAdornment>
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default ContactDiv ;