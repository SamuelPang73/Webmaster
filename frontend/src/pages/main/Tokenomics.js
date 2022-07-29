import React from "react";
import { Grid, Box, Link, Button, Typography, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CircleIcon from '@mui/icons-material/Circle';

const useStyles = makeStyles({
    bg: {
        position: 'relative',
        background: '#080177 !important',
        width: '100%',
        zIndex: '1000',
        height: '100vh',
        ['@media (max-width:1200px)']: {
            height: '1200px'
        }
    },
    background: {
        position: 'relative',
        background: '-webkit-linear-gradient(45deg, #03FDF6 0%, #00EB7E 100%)',
        height: '486px !important'
    },
    title: {
        paddingTop: '83px !important',
        textAlign: 'center',
        fontSize: '50px !important',
        lineHeight: '61px !important',
        fontWeight: '400',
        fontFamily: 'Inter',
        color: '#FFFFFF',
    },
    tokenDiv: {
        position: 'absolute',
        width: '80%',
        top: '240px',
        display: 'flex',
        left: '10%',
        justifyContent: 'space-between',
    },
    tokenDivOne: {
        height: '446px !important',
        width: '446px !important',
        borderRadius: '40px !important',
        background: '-webkit-linear-gradient(#A089F1 0%, #A250E9 50%, #BF3CA7 100%)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    },
    tokenDivTwo: {
        height: '446px !important',
        width: '446px !important',
        borderRadius: '40px !important',
        background: '-webkit-linear-gradient(#A089F1 0%, #A250E9 50%, #BF3CA7 100%)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
        zIndex: '9999',
        alignItems: 'right'
    },
    listStyle: {
        marginLeft: '10px !important',
        lineHeight: '60px',
        color: '#FFFFFF !important',
        fontSize: '25px !important',
        textAlign: 'left'
    },
    svgIcon: {
        color: '#FFFFFF',
        width: '10px !important',
        height: '10px !important',
        marginLeft: '30px !important'
    },
    fusionTitle: {
        marginTop: '60px', 
        color: '#FFFFFF !important', 
        fontSize: '25px !important', 
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'baseline',
    },
    royalTitle: {
        marginTop: '60px', 
        color: '#FFFFFF !important', 
        fontSize: '25px !important', 
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
})

const Tokenomics = () => {
    const classes = useStyles();
    return (
        <Box className={classes.bg}>
            <Box className={classes.background}>
                <Typography className={classes.title}>TOKENOMICS</Typography>
            </Box>
            <Box className={classes.tokenDiv}>
                <Grid container justifyContent='space-between' spacing = {1}>
                    <Grid item xs={12} lg={6} xl={6} sx = {{display:'flex', justifyContent:'center'}}>
                        <Box className={classes.tokenDivOne}>
                            <Box className={classes.fusionTitle}>FUSION&nbsp;<Box sx= {{fontWeight: '700 !important',color: '#FFFFFF !important', fontSize: '25px !important'}}>0,042</Box><Box sx= {{fontSize:'15px !important'}}>ETH</Box></Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>66%  → jackpot</Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>14% → Trésorerie Tallyternity</Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>10% → Marketing</Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>10% → Team</Box>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} lg={6} xl={6} sx = {{display:'flex', justifyContent:'center'}}>
                        <Box className={classes.tokenDivTwo}>
                            <Box className = {classes.royalTitle}>ROYALTIES &nbsp;<Box sx = {{fontWeight:'700 !important'}}>10%</Box></Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '40px !important' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>66%  → jackpot</Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>14% → Trésorerie Tallyternity</Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>10% → Marketing</Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircleIcon className={classes.svgIcon}></CircleIcon>
                                <Box className={classes.listStyle}>10% → Team</Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Tokenomics;