import * as React from 'react' ;

import StarIcon from '@mui/icons-material/Star';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
    Box,
    Grid
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Articles.styles';

const Articles = () => {
    const classes = useStyles() ;

    const popularList = [
        {
            link : "",
            title : "How to get approved",
        },
        {
            link : "",
            title : "How to create and schedule a campaign",
        },
        {
            link : "",
            title : "How to use the drag &  drop editor",
        },
        {
            link : "",
            title : "How to use create and use groups",
        },
        {
            link : "",
            title :  "How to create and use custom fields"
        }
    ]

    const latesList = [
        {
            link : "",
            title :  "How to create an abandoned cart email...",
        },
        {
            link : "",
            title : "How to sync subscriber segments with...",
        },
        {
            link : "",
            title:  "How to exclude subscribers from a...",
        },
        {
            link : "",
            title :  "How to create an automation workflow",
        },
        {
            link : "",
            title : "How to set up automation triggers"
        }
    ]

    return (
        <Box className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <Box className={classes.articleDiv}>
                        <Box sx={{display : 'flex', gap : '10px', alignItems : 'center', mb : '20px'}}>
                            <StarIcon />
                            <Box className={classes.titleDiv}>
                                MOST POPULAR ARTICLES
                            </Box>
                        </Box>
                        <Box>
                            {
                                popularList.map((article, index) => (
                                    <Box className={classes.itemDiv} key={index}>
                                        <Box sx={{fontSize:  '20px', fontWeight: 'bold'}}>
                                            {article.title}
                                        </Box>
                                        <ArrowForwardIcon />
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'flex-start'}}>
                    <Box className={classes.articleDiv}>
                        <Box sx={{display : 'flex', gap : '10px', alignItems : 'center', mb : '20px'}}>
                            <TextSnippetIcon />
                            <Box className={classes.titleDiv}>
                                LATEST ARTICLES
                            </Box>
                        </Box>
                        <Box>
                            {
                                latesList.map((article, index) => (
                                    <Box className={classes.itemDiv} key={index}>
                                        <Box sx={{fontSize:  '20px', fontWeight: 'bold'}}>
                                            {article.title}
                                        </Box>
                                        <ArrowForwardIcon />
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Articles ;