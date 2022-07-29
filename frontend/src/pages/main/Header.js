import React from "react";

import { Grid, Box, Link, Button, useMediaQuery, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
    root : {
        height : '100px',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',

        "& .MuiLink-root" : {
            color : 'white',
            fontFamily : 'Inter',
            fontSize : '22px',
            textDecoration : 'unset'
        },

        "& .MuiButton-root" : {
            fontFamily : 'Inter',
            fontSize : '25px',
            fontWeight : 'bold',
            color : 'white',
            borderRadius: '18px',
            background: 'linear-gradient(90deg, #480472 0%, #8B18D2 100%)',

            ["@media (max-width : 750px)"] : {
                fontSize : '18px',
            },
        },
        
        "& .MuiSvgIcon-root" : {
            width : '60px',
            height : '60px',
            color : 'white',
            cursor : 'pointer',

            marginLeft : '30px',
            marginRight : '10px',

            ["@media (max-width : 550px)"] : {
                width : '50px',
                height : '50px'
            },
        }
    },
    logo : {
        display : 'flex',
        justifyContent : 'flex-left',
        alignItems : 'center',
        fontSize : '60px',
        lineHeight : '72px',
        color : 'white',
        fontFamily: 'Sui Generis Free !important',
        textShadow: '0px 0px 50px #FFFFFF',

        ["@media (max-width : 750px)"] : {
            fontSize : '35px',
        },
    },
    linkList : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
        
        padding : '0px 100px',
        
        ["@media (max-width : 1500px)"] : {
            padding : '0px 0px',
        },

        ["@media (max-width : 1300px)"] : {
            display : 'none'
        }
    },
    buttonDiv : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    walletButton : {
        width : '310px',
        height : '60px',
        ["@media (max-width : 750px)"] : {
            width : '200px',
            height : '50px',
        },
    }
})

const Header = () => {

    const classes = useStyles();

    const match1 = useMediaQuery('(max-width : 1300px)')
    const match2 = useMediaQuery('(min-width : 550px)')

    return (
        <Box className={classes.root}>
            <Box className={classes.logo}>
                <Box sx={{ml : 5, mr : 10}}>
                    1024
                </Box>
            </Box>
            <Box className={classes.linkList}>
                <Link sx = {{cursor:'pointer'}}> Acceuil </Link>
                <Link sx = {{cursor:'pointer'}}> About Us </Link>
                <Link sx = {{cursor:'pointer'}}> Fusionner </Link>
                <Link sx = {{cursor:'pointer'}}> Jackpot/Price Pool </Link>
                <Link sx = {{cursor:'pointer'}}> FAQ </Link>
            </Box>
            <Box className={classes.buttonDiv}>
                {
                    match2 &&
                    <Button className={classes.walletButton}>
                        Connect Wallet
                    </Button>
                }
                {
                    match1 &&
                    <>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </>
                }
            </Box>
        </Box>
    )
}

export default Header;