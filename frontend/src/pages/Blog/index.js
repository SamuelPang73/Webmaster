import * as React from 'react' ;

import { Routes, Route } from 'react-router-dom' ;

import StartDiv from '../../components/Blog/StartDiv';
import Blogs from '../../components/Blog/Blogs';
import CreateBlog from '../../components/Blog/CreateBlog';
import BlogDetail from '../../components/Blog/BlogDetail';
import BlogEdit from '../../components/Blog/BlogEdit';
import YourBlogs from '../../components/Blog/YourBlogs';

import {
    Box
} from '@mui/material' ;

const Blog = () => {
    return (
        <Routes>
            <Route path='/list' element={
                    <Box>
                        <StartDiv />
                        <Blogs />
                    </Box>
                }
            />
            <Route path='/list-own' element={
                    <Box>
                        <StartDiv />
                        <YourBlogs />
                    </Box>
                }
            />
            <Route path='/create-blog' element={
                <Box>
                    <StartDiv />
                    <CreateBlog />
                </Box>
            } />

            <Route path='/detail' element={<BlogDetail/>} />
            <Route path='/edit' element={<BlogEdit/>} />
        </Routes>
    )
}

export default Blog ;