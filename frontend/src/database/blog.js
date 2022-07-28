import { api_origin } from "../constants";
import axios from "axios";
import { authorization } from "../utils/Helper";

const header = authorization() ;

export const SaveBlog = async (title, description, image, sections, folder_id) => {
    try {
        const fn = new FormData() ;

        fn.append('blog_title', title) ;
        fn.append('blog_description', description);
        fn.append('folder_id', folder_id) ;
        fn.append('blog_image', image.blob);
        
        await Promise.all (
            sections.map((section, index) => {
                fn.append('sections[]', JSON.stringify({
                    title : section.title,
                    content : section.content,
                }));
            })
        )

        let res = await axios.post( `${api_origin}/blog/saveBlog`, fn , header) ;

        if(res.status === 200) return true ;

        return false ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const UpdateBlog = async (title, description, image, sections, blog_id, folder_id) => {
    try {
        const fn = new FormData() ;

        fn.append('folder_id', folder_id) ;
        fn.append('blog_image', image.blob);
        fn.append('blog_id', blog_id) ;
        fn.append('blog_title', title) ;
        fn.append('blog_description', description);
        
        await Promise.all (
            sections.map((section, index) => {
                fn.append('sections[]', JSON.stringify({
                    title : section.title,
                    content : section.content,
                }));
            })
        )

        let res = await axios.post( `${api_origin}/blog/updateBlog`, fn , header) ;

        if(res.status === 200) return true ;

        return false ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}