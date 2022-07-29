import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography, Button } from "@mui/material";
import GridDiv from "./gridDiv";
import Flamme from '../../assets/Home/flamme.svg';

const useStyles = makeStyles({
    btnWallet : {
        marginTop: '322px !important',
        fontFamily : 'Inter',
        fontSize : '25px !important',
        fontWeight : 'bold',
        color : '#FFFFFF !important',
        width : '80%',
        textAlign: 'center',
        height : '85px',
        borderRadius: '22px !important',
        background: 'linear-gradient(90deg, #480472 0%, #8B18D2 100%)',
        ['@media (max-width:1200px)']: {
            marginTop: '50px !important',
        }
    },
    btnFusion: {
        marginTop : '42px !important',
        fontFamily : 'Inter',
        fontSize : '25px !important',
        fontWeight : 'bold',
        color : '#FFFFFF !important',
        width : '80%',
        textAlign: 'center',
        height : '85px',
        borderRadius: '22px !important',
        background: 'linear-gradient(90deg, #00BBC6 0%, #00B358 100%)',
    },
    smallTitle: {
        color: '#FFFFFF',
        fontSize: '25px',
        lineHeight: '40px',
        textAlign: 'center',
        fontFamily: 'Inter'
    },
    lastTitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700 !important',
        fontSize: '18px !important',
        lineHeight: '30px !important',
        color: 'white', 
        textAlign: 'center'
    },
    numberTitle: {
        color: '#FFFFFF',
        fontSize: '25px',
        lineHeight: '40px',
        textAlign: 'center',
        fontFamily: 'Sui Generis Free !important',
    },
    gridDiv: {
        borderRadius: '25px !important',
        marginTop: '235px !important', 
        marginBottom: '266px !important', 
        boxShadow: '-1px -4px 20px 2px #9e5cd2'
    }
});

const MainGame = () => {

    const classes = useStyles();
    return (
        <>
            <Box sx = {{ background : 'linear-gradient(165.75deg, #1C0146 0%, #020183 100%);'}}>
                <Grid container>
                    <Grid item xs = {12} sm = {12} md = {12} lg = {3} xl = {3}>
                        <Box className = {classes.smallTitle} sx = {{ marginTop: '322px !important'}}>Fusionnez les chiffres</Box>
                        <Box className = {classes.smallTitle} sx = {{display: 'flex', justifyContent:'center'}}>jusqu’à obtenir le NFT&nbsp;<Box className = {classes.numberTitle}>1024</Box></Box>
                        <Box className = {classes.smallTitle}>et remportez le Jackpot</Box>
                        <Box className = {classes.lastTitle}> ( 27.048ETH + 2/3 des royalties )</Box>
                    </Grid>
                    <Grid item xs = {12} sm = {12} md = {12} lg = {6} xl = {6}>
                        <Box className= {classes.gridDiv}>
                            <GridDiv/>
                        </Box>
                    </Grid>
                    <Grid item xs = {12} sm = {12} md = {12} lg = {3} xl = {3} sx = {{textAlign: 'center'}}>
                        <Button className = {classes.btnWallet}>CONNECT WALLET</Button>
                        <Button className = {classes.btnFusion}>Fusion pour 0.042 ETH</Button>
                        <Box sx = {{marginTop: '150px !important', marginBotton: '320px !important'}}>
                            <img src = {Flamme} ></img>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )   
}

export default MainGame;