import React from "react";

import Home from "./Home";
import Header from "./Header";
import FAQ from "./FAQ";
import Tokenomics from "./Tokenomics";
import Jouer from "./Jouer";
import MainGame from "./MainGame";

import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import BACKGROUND_IMAGE from '../../assets/Home/background.png'
const useStyles = makeStyles({
    root : {
        position : 'relative',
        background:' #1C0146',
    },
    background : {
        backgroundImage : `url('${BACKGROUND_IMAGE}')`,
        background : 'no-repeat',
        backgroundSize : '100% 100%',
    }
})

const NFTDashboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>

        <Box className={classes.background}>
                <Header />
                <Home />
            </Box>            
            <Jouer />
            <MainGame />
            <Tokenomics />
            <FAQ />
        </Box>
    )
}

export default NFTDashboard;