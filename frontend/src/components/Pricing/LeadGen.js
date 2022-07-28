import * as React from 'react';

import Lead1Image from '../../assets/pricing/leadgen.png' ;

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { useStyles } from './StyledDiv/LeadGen.styles';
import {useTheme} from '@mui/styles';

const LeadGen = () => {
    const classes = useStyles() ;

    const theme = useTheme() ;

    const leadGen = [
        {
            title : 'lemlist for lead gen agencies',
            descp : <>
                <Box>
                    Manage all your clients campaigns from one convenient spot.
                </Box>
                <Button variant='contained'>Contact sales</Button>
            </>,
            img : Lead1Image
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid item xs={12} sx={{display : 'flex', justifyContent : 'center'}}>
                <Box >
                {
                    leadGen.map((item, index) => (
                        <Grid container key={index} spacing={5} sx={{marginBottom : '100px'}}> 
                            {
                                index % 2 === 0 ? <>
                                    <Grid item xs={6}>
                                        <img src={item.img} className={classes.imageCss}/>
                                    </Grid>
                                    <Grid item xs={6} key={index} className={classes.itemDiv}>
                                        <Box className={classes.titleDiv}>{item.title}</Box>
                                        <Box className={classes.descpDiv}>{item.descp}</Box>
                                    </Grid>
                                </> : <>
                                    <Grid item xs={6} key={index} className={classes.itemDiv}>
                                        <Box className={classes.titleDiv}>{item.title}</Box>
                                        <Box className={classes.descpDiv}>{item.descp}</Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={item.img} className={classes.imageCss}/>
                                    </Grid>
                                </>
                            }
                        </Grid>
                    ))
                }
                </Box>
            </Grid>
        </Box>
    )
}

export default LeadGen ;