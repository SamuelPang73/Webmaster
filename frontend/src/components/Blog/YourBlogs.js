import * as React from 'react' ;

import { useNavigate , useLocation} from 'react-router-dom' ;

import { connect } from 'react-redux' ;
import PropTypes from 'prop-types' ;
import { UserBlogsList } from '../../redux/actions/blogs';

import UserImage from '../../assets/auth/user.svg' ;

import {
    Grid,
    Box
} from '@mui/material' ;

import { useStyles } from './StyledDiv/Blogs.styles';
import { api_origin } from '../../constants';

const YourBlogs = (props) => { 
    const classes = useStyles() ;
    const navigate = useNavigate() ;
    const location = useLocation() ;

    const {
        UserBlogsList,
        
        userBlogsList
    } = props ;

    const handleBlogDetail = (blog) => {
        navigate('/blog/edit', {
            state : {
                blog : blog
            }
        }) ;
    }

    React.useEffect(() => {
        UserBlogsList() ;
    }, []) ;

    return (
        <Box className={classes.root}>
            <Grid container>
                {
                    userBlogsList && userBlogsList.map((blog, index) => (
                        index === 0 ? <Grid container spacing={2} sx={{mb : '30px', cursor : 'pointer'}} key={index}
                            onClick={() => handleBlogDetail(blog)}
                        >
                            <Grid item xs={8}>
                                <Box className={classes.imgDiv}>
                                    <img src={`${api_origin}/files/blogs/${blog.folder_id}/blog_image`} width={'100%'} />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className={classes.blogInfoDiv}>
                                    <Box className={classes.headDiv}>
                                        <Box className={classes.titleDiv}>
                                            {blog.title}
                                        </Box>
                                        <Box className={classes.contentDiv} component={'pre'}>
                                            {blog.description}
                                        </Box>
                                    </Box>
                                    <Box className={classes.footDiv}>
                                        <Box>
                                            <img src={`${api_origin}/files/avatars/${blog.user_id.avatar_id}` || UserImage} />
                                        </Box>
                                        <Box>
                                            <Box className={classes.nameDiv}>{blog.user_id.first_name + " " + blog.user_id.last_name}</Box>
                                            <Box className={classes.dateDiv}>{blog.createdAt}</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid> :
                        <Grid item xs={4} key={index} onClick={() => handleBlogDetail(blog)}>
                             <Box className={classes.blogInfoDiv}>
                                <Box className={classes.headDiv}>
                                    <img src={`${api_origin}/files/blogs/${blog.folder_id}/blog_image`} width={'100%'} />
                                    <Box className={classes.titleDiv} sx={{mt : '20px'}}>
                                        {blog.title}
                                    </Box>
                                    <Box className={classes.contentDiv} component={'pre'}>
                                        {blog.description}
                                    </Box>
                                </Box>
                                <Box className={classes.footDiv}>
                                    <Box>
                                        <img src={`${api_origin}/files/avatars/${blog.user_id.avatar_id}` || UserImage} />
                                    </Box>
                                    <Box>
                                        <Box className={classes.nameDiv}>{blog.user_id.first_name + " " + blog.user_id.last_name}</Box>
                                        <Box className={classes.dateDiv}>{blog.createdAt}</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

YourBlogs.propTypes = {
    UserBlogsList : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    userBlogsList : state.blogs.userBlogsList
})
const mapDispatchToProps = {
    UserBlogsList
}

export default connect(mapStateToProps, mapDispatchToProps)(YourBlogs) ;