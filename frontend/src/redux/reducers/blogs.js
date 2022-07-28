import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    blogsList : null ,
    userBlogsList : null
}

export default (state=INITIAL_STATE , action) => {
    switch(action.type){
        case ActionTypes.BlogsList : 
            return ({
                ...state,
                blogsList : action.payload
            }) ;
        case ActionTypes.UserBlogsList :
            return ({
                ...state,
                userBlogsList : action.payload
            })
        default :
            return state ;
    }
}