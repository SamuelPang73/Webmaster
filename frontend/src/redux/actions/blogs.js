import ActionTypes from "./actionTypes";
import axios from "axios";
import { authorization } from '../../utils/Helper' ;
import { api_origin } from "../../constants";

export const BlogsList = () => async dispatch => {
    try {
        let res = await axios.post(`${api_origin}/blog/listBlog`, {}) ;

        await dispatch({
            type : ActionTypes.BlogsList,
            payload : res.data.blogs
        }) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const UserBlogsList = () => async dispatch => {
    try {
        const header = authorization() ;
        
        let res = await axios.post(`${api_origin}/blog/userBlogs`, {}, header) ;

        await dispatch({
            type : ActionTypes.UserBlogsList,
            payload : res.data.blogs
        }) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}