import React from "react";
import { Box, Typography, Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const useStyles = makeStyles({
    back: {
        background: '#080177 !important',
        width: '100%',
        height: '800px !important',
        position: 'relative',

        display : 'flex', flexDirection : 'column', alignItems : 'flex-start', gap : 35
    },
    title: {
        width  : '100%',

        paddingTop: '180px !important',
        color: '#FFFFFF',
        fontSize: '50px !important',
        fontFamily: 'Inter',
        textAlign: 'center',
        lineHeight: '61px',
        fontWeight: '700 !important',

        marginBottom : 70
    },
    smallDiv: {
        display: 'flex',
        alignItems: 'center',

        width : '100% !important'
    },
    smallTitle: {
        fontFamily: 'Inter',
        fontSize: '25px !important',
        lineHeight: '30px',
        color: '#FFFFFF !important',
        marginLeft: '40px',
        ['@media (max-width:720px)']: {
            fontSize: '16px !important',
        }
    },
    svgIcon: {
        color:'#FFFFFF',
        width: '36px !important', 
        height:'36px !important', 
        marginLeft: '150px',
        ['@media (max-width:1150px)']: {
            marginLeft: '80px !important',
        },
        ['@media (max-width:1000px)']: {
            marginLeft: '0px !important',
        },
    },
});

const FAQ = () => {
    const classes = useStyles();

    return (
        <Box className= {classes.back}>
            <Box className= {classes.title}>FAQ</Box>
            <Box className= {classes.smallDiv}>
                <Box>
                    <PlayArrowIcon className = {classes.svgIcon} />
                </Box>
                <Box className = {classes.smallTitle}>Est-ce une collection officiel du Jeu 2048 ? Ou un partenariat avec le jeu ? </Box>
            </Box>
            <Box className= {classes.smallDiv}>
                <Box>
                    <PlayArrowIcon className = {classes.svgIcon} />
                </Box>
                <Box className = {classes.smallTitle}>Pourquoi il y a 1032 NFTs dans la collection ?</Box>
            </Box>
            <Box className= {classes.smallDiv}>
                <Box>
                    <PlayArrowIcon className = {classes.svgIcon} />
                </Box>
                <Box className = {classes.smallTitle}>D’où viennent les 27ETH du Jackpot ?</Box>
            </Box>
            <Box className= {classes.smallDiv}>
                <Box>
                    <PlayArrowIcon className = {classes.svgIcon} />
                </Box>
                < Box className = {classes.smallTitle}>Pourquoi la DAO de Tallyternity reçois 13,3% de l’argent générer par la collection ? </Box>
            </Box>
        </Box>
    )
}

export default FAQ;