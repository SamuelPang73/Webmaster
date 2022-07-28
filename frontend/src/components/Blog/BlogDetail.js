import * as React from 'react' ;

import { useLocation } from 'react-router-dom' ;

import { api_origin } from '../../constants';

import {
    Box,
    Grid
} from '@mui/material' ;

import { useStyles } from './StyledDiv/BlogDetail.styles';

const BlogDetail = () => {
    const location = useLocation() ;
    const classes = useStyles() ;

    const scrollRef = React.useRef() ;
    const [blog, setBlog] = React.useState(null) ;

    const handleGoSection = (index) => {
        // scrollRef.current.scrollTo({
        //     top: document.getElementById('section_' + index).offsetTop - 1100,
        //     behavior: 'smooth',
        // });
        window.scrollTo({
            top: document.getElementById('section_' + index).offsetTop - 80,
            behavior: 'smooth',
        });
    }

    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const CreateMarkUp = (props) => {

        const {
            description
        } = props ;

        const ctrl = React.useRef(null) ;

        React.useEffect(() => {
            if(ctrl) ctrl.current.innerHTML = decodeHtml(description) ;
        }, []);

        return (
            <Box ref={ctrl} >
            </Box>
        )
    }

    React.useEffect(() => {
        if(location?.state?.blog) {
            setBlog(location.state.blog) ;
        }
    }, []) ;

    return (
        <Box className={classes.root}>
            {
                blog && <>
                    <Box className={classes.titleDiv}>
                        {blog.title}
                    </Box>
                    <Box className={classes.descpDiv} component={'pre'}>
                        {blog.description}
                    </Box>
                    <Box className={classes.dividerDiv} />
                    <Box className={classes.creatorDiv}>
                        <Box>
                            <img src={`${api_origin}/files/avatars/${blog.user_id.avatar_id}`} 
                                style={{borderRadius : '50%'}}
                                width={60}
                                height={60}
                            />
                        </Box>
                        <Box>
                            <Box>
                                {blog.user_id.first_name + " " + blog.user_id.last_name}
                            </Box>
                            <Box>
                                {blog.createdAt}
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <img src={`${api_origin}/files/blogs/${blog.folder_id}/blog_image`} width={'100%'} />
                    </Box>
                    <Grid container spacing={2} sx={{ mt : '25px',}}>
                        <Grid item xs={8}>
                            <Box className={classes.listDiv} ref={scrollRef}>
                                {
                                    blog.sections.map((section, index) => (
                                        <Box key={index} id={'section_' + index}>
                                            <Box className={classes.secTitleDiv}>
                                                {
                                                    (index + 1) + ". " + JSON.parse(section).title
                                                }
                                            </Box>
                                            <Box className={classes.secContentDiv}>
                                                <CreateMarkUp 
                                                    description={JSON.parse(section).content}
                                                />
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box >
                                {
                                    blog.sections.map((section, index) => (
                                        <Box key={index} 
                                            onClick={() => handleGoSection(index)}
                                        >
                                            <Box className={classes.itemDiv}>
                                                {
                                                    (index + 1) + ". " + JSON.parse(section).title
                                                }
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </>
            }
        </Box>
    )
}

export default BlogDetail ;