import * as React from 'react';

import TrueImage from '../../assets/pricing/true.png' ;
import FalseImage from '../../assets/pricing/false.png' ;

import {
    Box,
    Grid,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Features.styles';

const Features = () => {
    const classes = useStyles() ;

    const headFields = [
        <>
        </>,
        <>
            <Box className={classes.headTitleDiv}>Email Warm-up</Box>
            <Box><span className={classes.priceValue}>$29</span> <span className={classes.unitDiv}>per month</span></Box>
        </>,
        <>
            <Box className={classes.headTitleDiv}>Email outreach</Box>
            <Box><span className={classes.priceValue}>$59</span> <span className={classes.unitDiv}>per month</span></Box>
        </>,
        <>
            <Box className={classes.headTitleDiv}>Sales Engagement</Box>
            <Box><span className={classes.priceValue}>$99</span> <span className={classes.unitDiv}>per month</span></Box>
        </>,
    ]

    const rowData = [
        {
            name : 'Connect any email provider',
            value1 : true,
            value2 : true,
            value3 : true
        },
        {
            name : 'Auto email warm-up',
            value1 : true,
            value2 : true,
            value3 : true
        },
        {
            name : 'Deliverability booster',
            value1 : true,
            value2 : true,
            value3 : true
        },
        {
            name : 'Send cold email campaigns',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Follow-ups',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Automated sequences',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Invite teammates',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Personalized images',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Native CRM integrations',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Other integrations + API',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'A/B testing',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Reporting',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Schedule campaigns for later',
            value1 : false,
            value2 : true,
            value3 : true
        },
        {
            name : 'Cold calling',
            value1 : false,
            value2 : false,
            value3 : true
        },
        {
            name : 'Dynamic landing pages',
            value1 : false,
            value2 : false,
            value3 : true
        },
        {
            name : 'Multichannel campaigns',
            value1 : false,
            value2 : false,
            value3 : true
        },
        {
            name : 'Video integration',
            value1 : false,
            value2 : false,
            value3 : true
        },
        {
            name : 'Calendar integration',
            value1 : false,
            value2 : false,
            value3 : true
        },
        {
            name : 'Chat integration',
            value1 : false,
            value2 : false,
            value3 : true
        },
    ]

    return (
        <>
            <Grid container sx={{mt : '60px', mb : '70px'}} spacing={2}>
                <Grid item xs={12} sx={{textAlign: 'center', fontWeight:'bold', fontSize : '40px'}}>
                    See all features
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <TableContainer sx={{paddingRight:"5px"}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        headFields.map((field, index) => (
                                            <TableCell key={index}>{ field }</TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rowData.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>
                                                {row.value1 ? <img src={TrueImage}/> : <img src={FalseImage} />}
                                            </TableCell>
                                            <TableCell>
                                                {row.value2 ? <img src={TrueImage}/> : <img src={FalseImage} />}
                                            </TableCell>
                                            <TableCell>
                                                {row.value3 ? <img src={TrueImage}/> : <img src={FalseImage} />}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default Features ;