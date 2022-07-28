import * as React from 'react';

import {
    Box,
    Grid,
    TextField,
    InputAdornment,
    Button,
} from '@mui/material' ;

import SearchIcon from '@mui/icons-material/Search' ;

const HelpDiv = () => {
    return (
        <Grid container sx={{pt : '80px', mb : '80px'}}>
            <Grid item xs={12} sx={{display : 'flex', justifyContent:'center'}}>
                <Box sx={{maxWidth : '940px'}}>
                    <Box sx={{fontSize : '48px', fontWeight: 'bold', textAlign:'center'}}>
                        How can we help?
                    </Box>
                    <Box sx={{fontSize : '18px', mb : '20px', mt : '10px', textAlign : 'center'}}>
                        Our team is eager to assist you. If you need help getting started, find a bug, or have trouble using our tool, get in touch so we can help.
                    </Box>
                    <Box sx={{display : 'flex', justifyContent : 'center'}}>
                        <Button variant='contained'>Contact Us</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default HelpDiv ;