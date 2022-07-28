import * as React from 'react' ;

import { useNavigate } from 'react-router-dom' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import { SaveBlog } from '../../database/blog';

import { v4 as uuidv4 } from 'uuid' ;
import Editor from '../Common/Editor';
import swal from 'sweetalert' ;

import {
    Box, 
    TextField,
    Grid,
    Button,
    InputLabel
} from '@mui/material' ;

import { useStyles } from './StyledDiv/CreateBlog.styles';

const CreateBlog = (props) => {
    const classes = useStyles() ;
    const navigate = useNavigate() ;

    const [blog_title, setBlogTitle] = React.useState('') ;
    const [blog_description, setBlogDescription] = React.useState('') ;
    const [blog_image, setBlogImage] = React.useState({
        preview : "",
        blob : ""
    }) ;

    const [sections, setSections] = React.useState([]) ;
    const [blogId, setBlogId] = React.useState(null) ;
    const [ enabledCreate, setEnabledCreate] = React.useState(false) ;

    const handleSaveBlog = async () => {
        console.log(blog_image) ;

        if(await SaveBlog(blog_title, blog_description, blog_image, sections, blogId)) {
            swal({
                title : 'Success',
                text  :'Blog Created Successfully',
                icon : 'success',
                timer: 5000,
                buttons : false
            })
            navigate('/blog/list') ;
        }
    }

    const isEnabled = () => {

        if(!blog_image.preview || !blog_title || !blog_description) return false ;

        if(!sections.length) return false ;

        let temp = sections.filter(section => 
                section.title === '' ||
                section.content === ''
        )

        if(temp.length) return false ;

        return true ;
    }

    const handleChangeSection = async (value, index, element) => {
        let temp = [...sections] ;

        if(element === 'title') temp[index].title = value ;
        if(element === 'content') temp[index].content = value ;

        setSections([...temp]) ;
    }

    const handleAddSection = async () => {
        setSections([...sections, {
            title : "",
            content : "",
        }])
    }

    React.useEffect(() => {
        setBlogId(uuidv4()) ;
    }, []) ;

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <Box sx={{display : 'flex', justifyContent : 'center', pb : '20px'}}>
                                <TextField
                                    fullWidth
                                    placeholder='Enter Blog Title'
                                    value={blog_title}
                                    onChange={(e) => setBlogTitle(e.target.value)}
                                />
                            </Box>
                            <Box sx={{mb : '20px'}}>
                                <TextField
                                    fullWidth
                                    placeholder='Enter Blog Description'
                                    rows={7}
                                    multiline
                                    value={blog_description}
                                    onChange={(e) => setBlogDescription(e.target.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{mb : '20px'}}>
                                <InputLabel htmlFor={"upload-blog-image"} >
                                    {
                                        !blog_image?.preview ? <Box className={classes.attachDiv}>
                                            Attach Blog Image
                                        </Box> : <Box>
                                            <img src={blog_image.preview} width={'100%'} />
                                        </Box>
                                    }
                                </InputLabel>
                                <input
                                    type="file"
                                    id={"upload-blog-image"}
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        setBlogImage({
                                            preview : e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '',
                                            blob : e.target.files[0] ? e.target.files[0] : '' 
                                        })
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    {
                        sections.map((section, index) => (
                            <Box key={index} className={classes.sectionDiv}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <Box className={classes.titleDiv}>
                                            {index + 1}. section
                                        </Box>
                                        <Box sx={{display : 'flex', justifyContent : 'center', pb : '20px'}}>
                                            <TextField
                                                fullWidth
                                                placeholder='Enter Section Title'
                                                size='small'
                                                value={section.title}
                                                onChange={(e) => handleChangeSection(e.target.value, index, 'title')}
                                            />
                                        </Box>
                                        <Box>
                                            <Editor
                                                name="description"
                                                onChange={(content) => handleChangeSection(content, index, 'content')}
                                                editorLoaded={true}
                                                id={blogId}
                                                key={index}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))
                    }
                    
                    <Box className={classes.buttonGroup}>
                        <Button variant={'contained'} 
                            onClick={handleSaveBlog}
                            disabled={
                                !isEnabled()
                            }
                        >
                            Save
                        </Button>
                        <Button variant={'contained'} 
                            onClick={handleAddSection}
                        >
                            + Add Section
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
CreateBlog.propTypes = {
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog) ;