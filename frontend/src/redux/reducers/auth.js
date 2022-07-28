import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    isAuthenticated : false ,
    profile : null
}

export default (state=INITIAL_STATE , action) => {
    switch(action.type){
        case ActionTypes.UserProfile:
            return ({
                ...state,
                profile : action.payload
            })
        default :
            return state ;
    }
}