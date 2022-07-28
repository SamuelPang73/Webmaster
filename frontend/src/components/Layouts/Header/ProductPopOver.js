import * as React from 'react' ;

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import {
   Popover,
   List,
   Box,
   ListItemButton
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    popover : {
        zIndex : "1500 !important",
        "& .MuiList-root" : {
            padding : "10px"
        },
        "& .MuiListItemButton-root" : {
            padding : 3,
            fontSize : "14px" ,
            color : 'black',

            display : 'flex', gap: 10
        },
        "& a" : {
            textDecoration : "none"
        },
        "& .MuiSvgIcon-root" : {
            width : '15px'
        }
    },
    nameDiv : {
        fontWeight : 'bold',
        fontSize: 17
    },
    descpDiv : {
        color : 'gray'
    }
}))


const ProductPopOver = (props) => {

    const classes = useStyles() ;
    const navigate = useNavigate() ;

    const {
        open , anchorEl , handleProductPopOver,
    } = props ;

    const linkList = [
        {
            name : 'lemwarm',
            descp : 'Automatically warm up your domain',
            link : '/lemwarm'
        },
        {
            name : 'Email deliverability',
            descp : 'Land in the primary tab',
            link : '/email-deliverability'
        },
        {
            name : 'Email personalization',
            descp : 'Scale outreach without sounding impersonal',
            link : '/personalization'
        },
        {
            name : 'Follow-up emails',
            descp : 'Get more replies with targeted follow-ups',
            link : '/follow-up'
        },
        {
            name : 'Sales engagement',
            descp : 'Start sending multichannel sequences',
            link : '/sales-engagement'
        },
        {
            name : 'Integrations',
            descp : 'Connect lemlist to your favorite tools',
            link : '/integrations'
        }
    ]

    const handleClickLink = (link) => {
        handleProductPopOver() ;
        navigate(link);
    }
    return (
        <>
            <Popover
                id="product-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handleProductPopOver}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper : classes.popover
                }}
            >
                <List>
                    {
                        linkList.map((link, index) => (
                            <ListItemButton key={index}
                                onClick={() => handleClickLink(link.link)}
                            >
                                <Box>
                                    <Box className={classes.nameDiv}>
                                        {link.name}
                                    </Box>
                                    <Box className={classes.descpDiv}>
                                        {link.descp}
                                    </Box>
                                </Box>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Popover>

        </>
    )
}

const mapStateToProps = state => ({
}) ;
const mapDispatchToProps = {
} ;

export default connect(mapStateToProps, mapDispatchToProps)(ProductPopOver) ;