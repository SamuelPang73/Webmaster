import React from "react";

import CARDS_IMAGE from '../../assets/Jouer/cards.png';
import JOUER_IMAGE from '../../assets/Jouer/jouer.png';

import { Grid, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root : {
        position : 'relative',
        height : '500px',
        color : 'white',

        padding : '50px 0px',
        ['@media (max-width:1200px)']: {
            height: '800px !important',
            // padding: '50px 100px',
        },
        ['@media (max-width:740px)']:{
            padding : '100px 0px'
        },
        ['@media (max-width:750px)']: {
            height: '700px !important',
        },
        ['@media (max-width:500px)']: {
            height: '600px !important',
        },
    },
    title : {
        width : '80%',
        fontSize : '50px',
        textShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
        marginBottom : '72px',
        ['@media (max-width:1280px)']: {
            width : '50%',
            textAlign : 'center',
        },
        ['@media (max-width:750px)']: {
            width : '80%',
            fontSize: '32px !important'
        },
    },
    text : {
        width : '80%',
        fontSize : '25px',
        ['@media (max-width:1280px)']: {
            width : '50%',
            textAlign : 'center'
        },
        ['@media (max-width:750px)']: {
            width : '80%',
            fontSize: '20px !important'
        }
    },
    cardsImage : {
        width : '400px',
        ['@media (max-width:1280px)']: {
            marginTop : '100px'
        },
        ['@media (max-width:500px)']: {
            width : '300px',
        }
    },
    jouer : {
        position : 'absolute',
        zIndex : 2000,
        left : 'calc(50% - 100px)',
        bottom : '-100px',

        ['@media (max-width:500px)']: {
            left : 'calc(50% - 75px)',
        }
    },
    jouerImage : {
        width : '200px',

        ['@media (max-width:500px)']: {
            width : '150px',
        }
    }
})

const Jouer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm = {12} md = {12} xl = {6} lg = {6} sx={{display : 'flex',flexDirection : 'column', alignItems : 'center'}}>
                    <Box className={classes.title}>
                        What is 1024 ?
                    </Box>
                    <Box className={classes.text}>
                        1024 est une collection de 1032 NFTs, qui constituent un jeu stratégique avec un seul gagnant celui qui arrivera à créer le NFT 1024. 
                    </Box>
                </Grid>
                <Grid item xs={12} sm = {12} md = {12} xl = {6} lg = {6} sx={{display : 'flex', justifyContent : 'center'}}>
                    <Box component={'img'} src={CARDS_IMAGE} className={classes.cardsImage}/>
                </Grid>
                
                <Box className={classes.jouer}>
                    <Box component={'img'} src={JOUER_IMAGE} className={classes.jouerImage}/>
                </Box>
            </Grid>
        </Box>
    )
}

export default Jouer;