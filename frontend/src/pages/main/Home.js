import React from "react";
import { Grid, Box, Button, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { DownArrowCircle, UpArrowCircle } from "../../components/Common/SvgIcons";
import JACKPOT_IMAGE from '../../assets/Home/jackpot.png';

const useStyles = makeStyles({
    root : {
        height : 'calc(100vh - 100px)',
        display : 'flex',
        justifyContent : 'center',

        marginTop : '80px',

        "& .MuiButton-root" : {
            height : '70px',
            display : 'flex',
            justifyContent : 'space-around',
            color : 'white',
            fontSize : '25px',
            ["@media (max-width : 750px)"] : {
                height : '50px',
            }
        },

        ["@media (max-width : 750px)"] : {
            padding : '0px 30px'
        }
    },
    content : {
        display : 'flex',
        flexDirection : 'column !important',
    },
    title : {
        fontFamily: 'Sui Generis Free !important',
        textAlign : 'center',
        fontSize: 70,
        background: '-webkit-linear-gradient(90deg, #145FDB 0%, #19E1C1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0px 0px 20px rgba(255, 255, 255, 0.32)',
        marginBottom : '50px',

        ["@media (max-width : 1300px)"] : {
            fontSize : '50px'
        },
        ["@media (max-width : 750px)"] : {
            fontSize : '35px',
        },
    },
    text : {
        textAlign : 'center',
        lineHeight : '50px',
        fontSize : '25px',
        color : 'white',
        marginBottom : '50px',

        ["@media (max-width : 750px)"] : {
            fontSize : '20px',
            lineHeight : '40px',
        },
    },
    center : {
        display : 'flex',
        justifyContent : 'center',
        marginBottom : '50px',
    },
    upDownButton : {
        width : '200px',
        display : 'flex',
        justifyContent : 'space-around',
        background: 'rgba(1, 209, 163, 0.6) !important',
        borderRadius: '11px !important',

        marginRight : '20px !important',
    },
    mintButton : {
        width : '300px !important',
        background: 'linear-gradient(90deg, #00ECE9 0%, #00B968 100%) !important',
        borderRadius: '22px !important',
    },
    jackpotImage : {
        width : '500px',
        height : '350px',
        ["@media (max-width : 750px)"] : {
            width : '400px',
            height : '300px',
        },
        ["@media (max-width : 500px)"] : {
            width : '300px',
            height : '250px',
        }
    }
})

const Home = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(min-width : 900px)')

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={match1 ? 3 : 0}></Grid>
                <Grid item xs={match1 ? 6 : 12} className={classes.content}>
                    <Box className={classes.title}>
                        1024 GAME <br/>
                        NFT Collection
                    </Box>
                    <Box className={classes.text}>
                        <Box>
                            Fusionnez vos NFTs jusqu'au 1024 afin de toucher le Jackpot
                        </Box>
                        <Box>
                            FREE MINT. You are still early!
                        </Box>
                    </Box>
                    <Box className={classes.center}>
                        <Button className={classes.upDownButton}>
                            {UpArrowCircle}
                            1
                            {DownArrowCircle}
                        </Button>
                        <Button className={classes.mintButton}>
                            Mint
                        </Button>
                    </Box>
                    <Box className={classes.center}>
                        <Box component={'img'} src={JACKPOT_IMAGE} className={classes.jackpotImage}/>
                    </Box>
                </Grid>
                <Grid item xs={match1 ? 3 : 0}></Grid>
            </Grid>
        </Box>
    )
}

export default Home;