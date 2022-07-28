import * as React from 'react';

import Custom from '../../assets/integrations/custom.png' ;
import Support from '../../assets/integrations/support.png' ;

import { 
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/APISupport.styles';

const APISupport = () => {
    const classes = useStyles() ;

    return (
        <Grid container spacing={5} sx={{pt : '80px', background : 'white', pb : '40px'}}>
            <Grid item xs={6} sx={{display : 'flex', justifyContent: 'flex-end'}}>
                <Box className={classes.cardDiv}>
                    <img src={Custom} width={50}/>
                    <Box  className={classes.cardNameDiv}>Custom API</Box>
                    <Box className={classes.cardDescpDiv}>Get creative by leveraging lemlist's very own custom api.</Box>
                    <Button variant={'contained'} className={classes.buttonCss}>Custom API</Button>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{display : 'flex', justifyContent: 'flex-start'}}>
                <Box className={classes.cardDiv}>
                    <img src={Support} width={50}/>
                    <Box className={classes.cardNameDiv}>Support</Box>
                    <Box className={classes.cardDescpDiv}>Have questions? Connect with us via chat or send an email to ena@lemlist.com.</Box>
                    <Button variant={'contained'} className={classes.buttonCss}>Contact support {`>`} </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default APISupport ;