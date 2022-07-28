import React, { useEffect } from 'react' ;

import { useNavigate } from 'react-router-dom' ;

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


const ResourcePopOver = (props) => {

    const classes = useStyles() ;
    const navigate = useNavigate() ;

    const {
        open , anchorEl , handleResourcePopOver,
    } = props ;

    const linkList = [
        {
            name : 'List',
            descp : 'All Blog List',
            link : '/blog/list'
        },
        {
            name : 'Create',
            descp : 'You can post your blog',
            link : '/blog/create-blog'
        },
        {
            name : 'Your Blogs',
            descp : 'You can edit your blogs',
            link : '/blog/list-own'
        },
        // {
        //     name : 'Community',
        //     descp : 'Join the largest sales automation family',
        //     link : ''
        // },
        // {
        //     name : 'Masterclass',
        //     descp : 'Learn our $6M cold email secrets',
        //     link : ''
        // }
    ]
    return (
        <>
            <Popover
                id="product-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handleResourcePopOver}
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
                                onClick={() => {
                                    handleResourcePopOver() ;
                                    navigate(link.link) ; 
                                }}
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

export default connect(mapStateToProps, mapDispatchToProps)(ResourcePopOver) ;